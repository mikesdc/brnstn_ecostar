import "./DataVis.scss";

const DataVis = () => {
  return (
    <main className="main">
      <div className="main__card-example">
        <h1>Test Card</h1>
        <div className="main__join-now" onClick={handleJoinNow}>
          Join Now
        </div>
      </div>
    </main>
  );
};

export default DataVis;
