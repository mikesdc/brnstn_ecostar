import "./Main.scss";

import Header from "../../components/Header/Header";
import Calculator from "../../components/Calculator/Calculator";
import Footer from "../../components/Footer/Footer";
import DataVis from "../../components/DataVis/DataVis";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import Hero from "../../components/Hero/Hero";
import ModalJoinNow from "../../components/ModalJoinNow/ModalJoinNow";
import Partnerships from "../../components/Partnerships/Partnerships";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// const API_URL = process.env.REACT_APP_API_URL;

function Main() {

  // const [isloading, setIsLoading] = useState(true);
  
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState("");

  // const handleJoinNow = () => {
  //   setShowJoinModal(true);
  //   setShowLoginModal(false);
  // };
  // const handleLogin = () => {
  //   setShowJoinModal(false);
  //   setShowLoginModal(true);
  // };

  // For the data visualization component.
  // This block of code generates a number that increases and updates the DataVis component in random intervals.
  // This represents a simulation of the total carbon saved by the users of the app.
  useEffect(() => {
    const startTime = 1704667579900;
    const updateCarbonSaved = () => {
      const currentTime = new Date().getTime();
      setTotalCarbonSaved(
        Math.floor((currentTime - startTime) * (7.141592 / 12500))
      );
      const nextUpdateInMs = Math.random() * 5000;
      setTimeout(updateCarbonSaved, nextUpdateInMs);
    };
    updateCarbonSaved();
    return () => {};
  }, []);

  // // This block of code fetches the total carbon saved from the database and updates the DataVis component.
  //   useEffect(() => {
  //     fetch(`${API_URL}/totalQuantity`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTotalCarbonSaved(data[0].total_co2_saved_kg);
  //       });
  //   } , []);

  return (
    <>
      <Header
        setShowJoinModal={setShowJoinModal}
        setShowLoginModal={setShowLoginModal}
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
          />
        )}
      </AnimatePresence>

      <Hero
        setShowJoinModal={setShowJoinModal}
        setShowLoginModal={setShowLoginModal}
      />

      <DataVis
        setShowJoinModal={setShowJoinModal}
        totalCarbonSaved={totalCarbonSaved}
      />

      <Calculator />
      <Footer />
    </>
  );
}

export default Main;
