import "./EcoScore.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DataVis from "../../components/DataVis/DataVis";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import Partnerships from "../../components/Partnerships/Partnerships";
import EcoNumber from "../../components/EcoNumber/EcoNumber";
import { useState, useEffect } from "react";
import ModalJoinNow from "../../components/ModalJoinNow/ModalJoinNow";

const API_URL = process.env.REACT_APP_API_URL;

function EcoScore() {
  const [isloading, setIsLoading] = useState(true);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState("");

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowJoinModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      setTotalCarbonSaved(Math.floor((currentTime / 10000) * 7.200000000000234582) - 1227300600);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      {showJoinModal && <ModalJoinNow setShowJoinModal={setShowJoinModal} />}

      <EcoNumber />
      <Leaderboard />
      <Partnerships />

      <Footer />
    </>
  );
}

export default EcoScore;
