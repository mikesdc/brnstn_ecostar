import "./Leaderboard.scss";
import { useState, useEffect } from "react";
import userImage1 from "../../assets/images/user-image-1.webp";
import userImage2 from "../../assets/images/user-image-2.jpg";
import userImage3 from "../../assets/images/user-image-3.jpg";
import userImage4 from "../../assets/images/user-image-4.jpeg";
import firstPlace from "../../assets/icons/1st-prize.png";
import secondPlace from "../../assets/icons/2nd-place.png";
import thirdPlace from "../../assets/icons/3rd-place.png";
import participationMedal from "../../assets/icons/medal.png";

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
        <h1 className="main__table-header">LEADERBOARD</h1>

        <div className="main__table-wrapper">
          <div className="main__table-container">
            <section className="main__table-title">
              <div className="main__title pos">Position</div>
              <div className="main__title">Username</div>
              <div className="main__title point">Points</div>
            </section>

            <section className="main__table-data">
              <div className="main__data one">
                1st
                <div className="main__icon-container">
                  <img
                    className="main__icon"
                    src={firstPlace}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="main__data">
                <div className="main__image-container">
                  <img
                    className="main__user-image"
                    src={userImage1}
                    alt="user-image"
                  ></img>
                </div>
                Tate
              </div>
              <div className="main__data point">500,000</div>
            </section>
            <section className="main__table-data dark">
              <div className="main__data one">
                2nd
                <div className="main__icon-container">
                  <img
                    className="main__icon-2"
                    src={secondPlace}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="main__data">
                <div className="main__image-container">
                  <img
                    className="main__user-image"
                    src={userImage3}
                    alt="user-image"
                  ></img>
                </div>
                JessyJ
              </div>
              <div className="main__data point">480,000</div>
            </section>
            <section className="main__table-data">
              <div className="main__data one">
                3rd
                <div className="main__icon-container">
                  <img
                    className="main__icon-3"
                    src={thirdPlace}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="main__data">
                <div className="main__image-container">
                  <img
                    className="main__user-image"
                    src={userImage2}
                    alt="user-image"
                  ></img>
                </div>
                JonJones
              </div>
              <div className="main__data point">420,000</div>
            </section>
            <section className="main__table-data dark">
              <div className="main__data one">
                4th
                <div className="main__icon-container">
                  <img
                    className="main__icon-4"
                    src={participationMedal}
                    alt="first place medal"
                  ></img>
                </div>
              </div>
              <div className="main__data">
                <div className="main__image-container">
                  <img
                    className="main__user-image"
                    src={userImage4}
                    alt="user-image"
                  ></img>
                </div>
                Khamzat
              </div>
              <div className="main__data point">300,000</div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;
