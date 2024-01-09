import "./EcoScore.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import Partnerships from "../../components/Partnerships/Partnerships";
import EcoNumber from "../../components/EcoNumber/EcoNumber";
import ModalJoinNow from "../../components/ModalJoinNow/ModalJoinNow";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// const API_URL = process.env.REACT_APP_API_URL;

function EcoScore({ isLoggedIn, setIsLoggedIn }) {
  // const [isloading, setIsLoading] = useState(true);

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <Header
        setShowJoinModal={setShowJoinModal}
        setShowLoginModal={setShowLoginModal}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <AnimatePresence>
        {showJoinModal && (
          <ModalJoinNow
            setShowJoinModal={setShowJoinModal}
            setShowLoginModal={setShowLoginModal}
          />
        )}
        {showLoginModal && (
          <ModalLogin
            setShowJoinModal={setShowJoinModal}
            setShowLoginModal={setShowLoginModal}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </AnimatePresence>

      <EcoNumber isLoggedIn={isLoggedIn}/>
      <Leaderboard />
      <Partnerships />

      <Footer />
    </>
  );
}

export default EcoScore;
