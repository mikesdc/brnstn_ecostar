import "./DataVis.scss";
import { motion } from "framer-motion";

const DataVis = ({ setShowJoinModal, totalCarbonSaved }) => {
  const handleJoinNow = () => {
    console.log("Join Now");
    setShowJoinModal(true);
  };

  return (
    <main className="data-vis__main">
      <div className="data-vis__card">
        <div className="data-vis__card-left"></div>

        <div className="data-vis__card-right">
          <div className="data-vis__header">
            <h1>EcoStars have saved </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="data-vis__data">
              <h1>{totalCarbonSaved || 0}</h1>
            </div>
          </motion.div>

          <div className="data-vis__header">
            <h1>
              kilograms of CO<span className="subscript">2</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DataVis;
