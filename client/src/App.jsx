import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.scss";

import Main from "./pages/Main/Main";
import EcoScore from "./pages/EcoScore/EcoScore";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("userId", 0);
    sessionStorage.setItem("userName", "EcoStar");
    sessionStorage.setItem("userLoggedIn", false);
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ecoscore" element={<EcoScore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
