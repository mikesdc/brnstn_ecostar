import "./EcoNumber.scss";
import { useState, useEffect } from "react";

const EcoScore = () => {
  const [isloading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [totalScore, setTotalScore] = useState(1200);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState(100);
  const [userName, setUserName] = useState("EcoStar");

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowJoinModal(true);
  };

  return (
<main className="data-vis__main">
      <div className="data-vis__card">
        <div className="data-vis__card-left"></div>
        <div className="data-vis__card-right">
          <div className="data-vis__header">
            <h1>Welcome, {userName}!</h1>
          </div>
          <div className="data-vis__header">
            <h1>You have saved</h1>
          </div>
          <div className="data-vis__header">
            <h1>{totalCarbonSaved} kilograms of CO<span className="subscript">2</span></h1>
          </div>
          <div className="data-vis__header">
            <h1>from being emitted!</h1>
          </div>
          <div className="data-vis__header">
            <h1>You have</h1>
          </div>
          <h1 className="data-vis__data">{totalScore}</h1>
          <div className="data-vis__header">
            <h1> Eco Points! Reward yourself!</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EcoScore;
