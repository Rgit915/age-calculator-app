import { useState } from 'react';
import { validateDate } from '../utils/dateValidation';

const DateForm = () => {
  // State variables to store the input values
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  // State variable to store error messages
  const [errors, setErrors] = useState({ day: '', month: '', year: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const validationErrors = validateDate(day, month, year); // Validate the date
    setErrors(validationErrors); // Set validation errors in the state

    // If there are no validation errors, proceed with form submission logic
    if (Object.keys(validationErrors).length === 0) {
      // Handle successful form submission
      console.log('Date is valid:', { day, month, year });
    } else {
      // Handle form submission with errors
      console.log('Date is invalid');

    }
  }

  return (
    <section className="date-of-birth flex flex-row uppercase text-sm">
      <div className="date-form">
        <form onSubmit={handleSubmit}>
          <div className="date-input">
            <div  className={`input-day ${errors.day ? 'text-light-red' : ''}`}>
              <label htmlFor="day" className={`${errors.month ? 'text-light-red' : ''}`}>Day</label>
              <input
                type="number"
                id="day"
                name="day"
                placeholder="DD"
                onChange={(e) => setDay(e.target.value)}
                className={`${errors.day ? 'text-light-red' : ''}`}
              />
            <div>
              {errors.day && <span className="error-display">{errors.day}</span>}
            </div>

            </div>
            <div className={`input-month ${errors.month ? 'text-light-red' : ''}`}>
              <label htmlFor="month" className={`${errors.month ? 'text-light-red' : ''}`}>Month</label>
              <input
                type="number"
                id="month"
                name="month"
                placeholder="MM"
                onChange={(e) => setMonth(e.target.value)}

                />
                <div>
                {errors.month && <span className="error-display">{errors.month}</span>}
                </div>
            </div>
            <div className={`input-year ${errors.year ? 'text-light-red' : ''}`}>
              <label htmlFor="year" className={`${errors.year ? 'text-light-red' : ''}`}>Year</label>
              <input
                type="number"
                id="year"
                name="year"
                placeholder="YYYY"
                onChange={(e) => setYear(e.target.value)}
                />
                <div>
                  {errors.year && <span className="error-display">{errors.year}</span>}
                </div>
              </div>
          </div>
          <div className="calculate-container">
            <div className="arrow-button">
              <button type="submit">
                <img src="images/icon-arrow.svg" alt="Submit" />
              </button>
            </div>
            <div className="horizontal-line w-72">
              <hr />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DateForm;
