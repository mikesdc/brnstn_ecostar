import "./EcoNumber.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const EcoScore = ({userId,userName}) => {
  const [isloading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [totalCarbonSaved, setTotalCarbonSaved] = useState(0);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";


  useEffect(() =>{

    axios
      .get(API_URL+"/commute/total/"+userId)
      .then(function (response) {
        if (response.data[0]["sum(`eco_score`)"] !== null){
          setTotalScore(response.data[0]["sum(`eco_score`)"])
        }else{
          setTotalScore(0)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    axios
      .get(API_URL+"/commute/carbon/"+userId)
      .then(function (response) {
        if (response.data[0]["sum(`co2_saved_kg`)"] !== null){
          setTotalCarbonSaved(response.data[0]["sum(`co2_saved_kg`)"])
        }
        else{
          setTotalCarbonSaved(0)
        }
      })
  },[userId]);

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
