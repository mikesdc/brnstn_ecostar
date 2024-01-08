import './Calculator.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Calculator = () => {

  const today = new Date().toISOString().split('T')[0];   // Format today's date as YYYY-MM-DD

  // state to hold carbon footprint result
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  const [carbonFootprintSaved, setCarbonFootprintSaved] = useState(null);
  const [pointsEarned, setPointsEarned] = useState('');
  const [dateInput, setDateInput] = useState(today);


  // const [loggedIn, setLoggedIn] = useState(true); // For testing
  const [loggedIn, setLoggedIn] = useState(false); // For testing

  // build new object to hold data
  let [formData, setFormData] = useState({
    transportMethod: '',
    distance: '',
    workDays: '',
    newPoints: '',
  });

  // emissions factors for each transport method
  const emissionsFactors = {
    'Petrol Car 🚙': 0.21,
    'Electric Car 🔋': 0.12,
    'Motorbike 🏍️': 0.16,
    'Bicycle/Ride 🚲': 0,
    'Public Transport 🚌': 0.05,
    'Walking 🚶': 0,
  };

  const emissionsFactorsSaved = {
    'Petrol Car 🚙': 0,
    'Electric Car 🔋': 0.12,
    'Motorbike 🏍️': 0.03,
    'Bicycle/Ride 🚲': 0.2,
    'Public Transport 🚌': 0.07,
    'Walking 🚶': 0.2,
  };

  // carbon footprint calculation
  const calculateFootprint = () => {
    const emissionsFactor = emissionsFactors[formData.transportMethod];
    const annualDistance = formData.distance * formData.workDays * 52;
    const footprint = annualDistance * emissionsFactor;
    setCarbonFootprint(footprint);
  };

  // emissions SAVED calculation
  const calculateFootprintSaved = () => {
    const emissionsFactor = emissionsFactorsSaved[formData.transportMethod];
    const annualDistance = formData.distance * formData.workDays * 52;
    let footprint = annualDistance * emissionsFactor;
    let points = footprint * 0.5;

    if (isNaN(footprint)) {
      // handle NaN values
      footprint = 0;
      points = 0;
    }

    setCarbonFootprintSaved(footprint); // Set the footprint (CO2e saved) in state
    setPointsEarned(points.toFixed(0)); // Set the points with no decimal places
  };


  // event handler that updates state, handles multiple form input field changes
  const formHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // event handler for calculation
  const calcHandler = (e) => {
    e.preventDefault();
    calculateFootprintSaved();
    if (loggedIn) {
      let newFormData;
      const today = new Date(); // Get the current date + format it
      const formattedDate = today.toISOString().split('T')[0];  // Format: YYYY-MM-DD
      calculateFootprintSaved();
      newFormData = {
        ...formData,
        submissionDate: formattedDate,  // Set the current date
        tripDate: dateInput,
        newPoints: pointsEarned,
      };
      console.log('newFormData=', newFormData);
    } else {
      calculateFootprint();
    }
  }

  // event handler for form submission
  const submitHandler = (e) => {
    e.preventDefault();
    calcHandler(e);
    alert('Points Added! 👏');
  };

  // // Effect to clear results when form data changes -- breaks when you calculate (doesnt display points))
  // useEffect(() => {
  //   setCarbonFootprint(null);
  //   setCarbonFootprintSaved(null);
  //   setPointsEarned(null);
  // }, [formData]); // Dependency array includes formData


  return (
    <>
      <div className='calculator-main'>
        <div className='calculator-main__card-example'>
          <div className='card-left'>
            <div className='card-left__inner'>
              {loggedIn ? (
                <>
                  <h1 className='card-left__header'>
                    Money printer go brrrrr 🤑
                    <br />
                    Add a trip to stack your points!
                  </h1>
                </>
              ) : (
                <h1 className='card-left__header'>
                  Calculate your annual commuting Carbon Footprint{' '}
                </h1>
              )}

              <p className='card-left__text'>
                Commuting to work is a daily routine for many of us, but the way
                you do it has a big impact on the environment.
              </p>
              <br />
              <p className='card-left__text'>
                Use our calculator to measure your commute's impact on the
                environment.
              </p>
            </div>
          </div>
          <div className='card-right'>
            <div className='card-right__inner'>
              <div className='card-right__inner-card'>
                {loggedIn ? (
                  <>
                    <h2 className='calc-result'>
                      C02e SAVED
                      {carbonFootprintSaved !== null && (
                        <div className='result'>
                          {carbonFootprintSaved.toFixed(2)} kg
                        </div>
                      )}
                    </h2>
                    <div className='calc-result'>
                      POINTS STACKED
                      <div className='result'>{pointsEarned}</div>
                    </div>

                  </>
                ) : (
                  <h2 className='calc-result'>
                    C02e per year
                    {carbonFootprint !== null && (
                      <div className='result'>
                        {carbonFootprint.toFixed(2)} kg
                      </div>
                    )}
                  </h2>
                )}

                <form onSubmit={submitHandler}>
                  <div className='calc__input-group'>Date
                    <input
                      required
                      type="date"
                      value={dateInput}
                      onChange={(e) => setDateInput(e.target.value)}
                      name="dateInput"
                      min="2023-01-01"
                      max={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className='calc__input-group'>
                    <label>Transport Method: </label>
                    <select
                      required
                      value={formData.transportMethod}
                      name='transportMethod'
                      onChange={formHandler}
                    >
                      <option value=''>Select a transport method</option>
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
                      required
                      type='number'
                      value={formData.distance}
                      placeholder='Enter distance to work'
                      name='distance'
                      onChange={formHandler}
                    ></input>
                  </div>
                  <div className='calc__input-group'>
                    <label>Work Days per Week:</label>
                    <input
                      required
                      type='number'
                      value={formData.workDays}
                      placeholder='Enter work days per week'
                      name='workDays'
                      min='1'
                      max='7'
                      onChange={formHandler}
                    ></input>
                  </div>
                  {loggedIn ? (
                    <div className='calc__buttons'>
                      <button
                        className='calc__button'
                        type='button'
                        onClick={calcHandler}
                      >
                        Calculate
                      </button>
                      <button
                        className='calc__button'
                        type='submit'>
                        Submit
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        className='calc__button'
                        type='button'
                        onClick={calcHandler}
                      >
                        Calculate
                      </button>
                    </>
                  )}
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

