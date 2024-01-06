import "./DataVis.scss";

const DataVis = ({ setShowModal }) => {
  const handleJoinNow = () => {
    console.log("Join Now");
    setShowModal(true);
  };

  return (
    <main className="data-vis__main">
      <div className="data-vis__card">
        <div className="data-vis__header">
          <h1>DataVisualization</h1>
        </div>
        <div className="data-vis__join-now" onClick={handleJoinNow}>
          Join Now
        </div>
      </div>
    </main>
  );
};

export default DataVis;
