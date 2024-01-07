import "./Main.scss";
import Header from "../../components/Header/Header";
import Calculator from "../../components/Calculator/Calculator";
import Footer from "../../components/Footer/Footer";

const API_URL = process.env.REACT_APP_API_URL;

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__card-example">Test Card</div>
      </main>
      <Calculator />
      <Footer />
    </>
  );
}

export default Main;
