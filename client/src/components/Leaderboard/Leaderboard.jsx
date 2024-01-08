import "./Leaderboard.scss";
import { useState, useEffect } from "react";

const Leaderboard = () => {
  const [isloading, setIsLoading] = useState(true);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState("");

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowJoinModal(true);
  };

  return (
    <main className="main">
      <div className="main__card">
        <h1 className="main__table-title">LEADERBOARD</h1>

        <section className="main__table-container">
          <table>
            <thead>
              <tr>
                <th>POS</th>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <td>1</td>
              <td>BullyB97</td>
              <td>115,000</td>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default Leaderboard;
