import "./Hero.scss";

const Hero = ({ setShowJoinModal, setShowLoginModal }) => {
  const handleJoinNow = () => {
    setShowJoinModal(true);
    setShowLoginModal(false);
  };
  // const handleLogin = () => {
  //   setShowJoinModal(false);
  //   setShowLoginModal(true);
  // };

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
              <button className="hero__button" onClick={handleJoinNow}>
                Join Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
