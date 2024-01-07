import "./Header.scss";

const Header = ({ setShowModal }) => {
  const handleJoinNow = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="wrapper">
        <section className="hero">
          <div className="hero__container">
            <h1 className="hero__title">
              Take an active step in reducing CO2 and playing a role in
              minimizing your carbon foot print by using EcoStar<span>©</span>
            </h1>
            <div className="hero__button-container">
              <button className="hero__button">Join Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
