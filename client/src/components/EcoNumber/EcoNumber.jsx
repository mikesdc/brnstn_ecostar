import "./EcoNumber.scss";
import { useState, useEffect } from "react";

const EcoScore = () => {
  const [isloading, setIsLoading] = useState(true);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState("");

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowJoinModal(true);
  };

  return (
    <main className="main">
      <div className="main__card-example">
        <h1>ECO SCORE NUMBER</h1>
        <h1>LIKE A SPEED GAUGE OR SIMPLE TEXT</h1>
        <div className="main__join-now" onClick={handleJoinNow}>
          Join Now
        </div>
      </div>
    </main>
  );
};

export default EcoScore;
