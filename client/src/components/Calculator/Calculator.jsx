import './Calculator.scss';
import {useState} from 'react';

const Calculator = () => {

  // state to hold carbon footprint result
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // build new object to hold data, to be submitted to server
  const [formData, setFormData] = useState({
    transportMethod: '',
    distance: '',
    workDays: '',
  });

  // // event handler that updates state, handles multiple form input field changes
  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // emissions factors for each transport method
  const emissionsFactors = {
    'Petrol Car 🚙': 0.21,
    'Electric Car 🔋': 0.12,
    'Motorbike 🏍️': 0.16,
    'Bicycle/Ride 🚲': 0,
    'Public Transport 🚌': 0.05,
    'Walking 🚶': 0,
  };

  // carbon footprint calculation
  const calculateFootprint = (e) => {
    e.preventDefault();
    const emissionsFactor = emissionsFactors[formData.transportMethod];
    const annualDistance = formData.distance * formData.workDays * 52;
    const footprint = annualDistance * emissionsFactor;
    setCarbonFootprint(footprint);
  }

  console.log('FormData=', formData);

  return (
    <>
      <div className='calculator-main'>
        <div className='calculator-main__card-example'>
            <div className='card-left'>
              <div className='card-left__inner'>
                <h1 className='card-left__header'>Calculate your commuting Carbon Footprint</h1>
                  <p className='card-left__text'>Commuting to work is a daily routine for many of us, but the way you do it has a big impact on the environment.</p>
                <br />
                  <p className='card-left__text'>Use our calculator to measure your commute's impact on the environment.</p>
              </div>
            </div>
            <div className='card-right'>
              <div className='card-right__inner'>
                <div className='card-right__inner-card'>
                  <h2 className='calc-result'>
                    C02e per year
                      {carbonFootprint !== null && (
                        <div className='result'>
                          {carbonFootprint.toFixed(2)} kg
                        </div>
                      )}
                  </h2>
                  <form onSubmit={calculateFootprint}>
                    <div className='calc__input-group'>
                    <label>Transport Method: </label>
                      <select
                        value={setFormData.transportMethod}
                        name='transportMethod'
                        onChange={formHandler}
                      >
                      {Object.keys(emissionsFactors).map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                      </select>
                    </div>
                    <div className='calc__input-group'>
                      <label>Distance to Work (KM's): </label>
                      <input
                        type='number'
                        value={setFormData.distance}
                        placeholder="Enter distance to work"
                        name='distance'
                        onChange={formHandler}
                      ></input>
                    </div>
                    <div className='calc__input-group'>
                      <label>Work Days per Week:</label>
                      <input
                        type='number'
                        value={setFormData.workDays}
                        placeholder='Enter work days per week'
                        name='workDays'
                        min='1'
                        max='7'
                        onChange={formHandler}
                      ></input>
                    </div>
                    <button className='calc__button' type='submit'>Calculate</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
