import "./Leaderboard.scss";
import { useState, useEffect } from "react";

const Leaderboard = () => {
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
        <h1>LEADERBOARD AND 7 DAYS CHART</h1>
        <div className="main__join-now" onClick={handleJoinNow}>
          Join Now
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;
