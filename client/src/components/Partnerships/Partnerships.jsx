import "./Partnerships.scss";
import { useState, useEffect } from "react";

const Partnerships = () => {
  const [isloading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState("");

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowModal(true);
  };

  return (
    <main className="main">
      <div className="main__card-example">
        <h1>PARTNER STORES</h1>
        <h1>CARDS LAYOUT FOR DIFFERENT STORES</h1>
        <div className="main__join-now" onClick={handleJoinNow}>
          Join Now
        </div>
      </div>
    </main>
  );
};

export default Partnerships;
