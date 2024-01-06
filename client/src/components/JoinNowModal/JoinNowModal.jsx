import React from "react";
import { useState, useEffect } from "react";
import "./JoinNowModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const JoinNowModal = ({
  selectedWarehouseName,
  selectedWarehouseId,
  setShowModal,
  setSelectedWarehouseName,
  setSelectedWarehouseId,
}) => {
  // function for button - closing the modal
  const handleClose = () => {
    setFormData(blankFormData);
    setShowModal(false);
  };

  // function for button - deleting a warehouse
  const handleDelete = () => {
    axios
      .delete(API_URL + "/warehouses/" + selectedWarehouseId)
      .then((response) => {
        setShowModal(false);
        setSelectedWarehouseName(null);
        setSelectedWarehouseId(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  let blankFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="join-now-modal__overlay">
      <div className="join-now-modal__container">
        <div className="join-now-modal__close">
          <img src={closeIcon} alt="close icon" onClick={handleClose} />
        </div>
        <div className="join-now-modal__title">
          <h1>Join Now</h1>
        </div>
        <div className="join-now-modal__content">
          <form className="join-now-modal__form" onSubmit={handleSubmit}>
            <div className="join-now-modal__row">
              <div className="join-now-modal__col-left">Email Address</div>
              <div className="join-now-modal__col-right">
                <input
                  type="email"
                  name="email"
                  className="join-now-modal__input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />{" "}
              </div>
            </div>
            <div className="join-now-modal__row">
              <div className="join-now-modal__col-left">First Name</div>
              <div className="join-now-modal__col-right">
                <input
                  type="text"
                  name="firstName"
                  className="join-now-modal__input"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="join-now-modal__row">
              <div className="join-now-modal__col-left">Last Name</div>
              <div className="join-now-modal__col-right">
                <input
                  type="text"
                  name="lastName"
                  className="join-now-modal__input"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="join-now-modal__row">
              <div className="join-now-modal__col-left">Phone Number</div>
              <div className="join-now-modal__col-right">
                <input
                  type="text"
                  name="phoneNumber"
                  className="join-now-modal__input"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="join-now-modal__row">
              <div className="join-now-modal__col-left">Password</div>
              <div className="join-now-modal__col-right">
                <input
                  type="password"
                  name="password"
                  className="join-now-modal__input"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
            </div>
            <button className="join-now-modal__submit" type="submit">
              Create Profile
            </button>
          </form>

          <div className="join-now-modal__separator">
            ------------------------------------<div className="join-now-modal__separator-or">
            OR</div>------------------------------------
          </div>

          <div className="join-now-modal__cancel-container">
            <button className="join-now-modal__cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNowModal;
