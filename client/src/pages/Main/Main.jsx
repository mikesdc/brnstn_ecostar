import "./Main.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DataVis from "../../components/DataVis/DataVis";
import { useState, useEffect } from "react";
import JoinNowModal from "../../components/JoinNowModal/JoinNowModal";

const API_URL = process.env.REACT_APP_API_URL;

function Main() {
  const [isloading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowModal(true);
  };

  return (
    <>
      <Header />

      {showModal && <JoinNowModal setShowModal={setShowModal} />}

      <DataVis />

      <main className="main">
        <div className="main__card-example">
          <h1>Test Card</h1>
          <div className="main__join-now" onClick={handleJoinNow}>
            Join Now
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Main;
