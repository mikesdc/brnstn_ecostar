import "./Main.scss";
import Header from "../../components/Header/Header";
import Calculator from "../../components/Calculator/Calculator";
import Footer from "../../components/Footer/Footer";
import DataVis from "../../components/DataVis/DataVis";
import { useState, useEffect } from "react";
import JoinNowModal from "../../components/JoinNowModal/JoinNowModal";
import Hero from "../../components/Hero/Header";

const API_URL = process.env.REACT_APP_API_URL;

function Main() {
  const [isloading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState("");

  const handleJoinNow = () => {
    console.log("Join Now");
    setShowModal(true);
  };

  // For the data visualization component.
  // This block of code generates a number that increases and updates the DataVis component every second.
  // This represents a simulation of the total carbon saved by the users of the app.
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      setTotalCarbonSaved(
        Math.floor((currentTime / 10000) * 7.200000000000234582) - 1227300600
      );
    }, 1000);

    return () => clearInterval(interval);
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
      <Header />
      <Hero setShowModal={setShowModal} />

      {showModal && <JoinNowModal setShowModal={setShowModal} />}

      <DataVis
        setShowModal={setShowModal}
        totalCarbonSaved={totalCarbonSaved}
      />

      <main className="main">
        <div className="main__card-example">
          <h1>Test Card</h1>
          <div className="main__join-now" onClick={handleJoinNow}>
            Join Now
          </div>
        </div>
      </main>
      <Calculator />
      <Footer />
    </>
  );
}

export default Main;
