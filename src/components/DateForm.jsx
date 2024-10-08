import { useState } from 'react';
import { validateDate } from '../utils/dateValidation';

const DateForm = ({onDateSubmit}) => {
  // State variables to store the input values
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  // State variable to store error messages
  const [errors, setErrors] = useState({ day: '', month: '', year: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateDate(day, month, year);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onDateSubmit({ day, month, year });
    }
  };

  return (
    <section className="date-of-birth flex flex-row uppercase text-sm">
      <div className="date-form">
        <form onSubmit={handleSubmit}>
          <div className="date-input">
            <div  className={`input-day ${errors.day ? 'text-light-red' : ''}`}>
              <label htmlFor="day" className={`${errors.day ? 'text-light-red' : ''}`}>Day</label>
              <input
                type="number"
                id="day"
                name="day"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className={`${errors.day ? 'border-light-red' : 'border-light-gray'}`}
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
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={`${errors.month ? 'border-light-red' : 'border-light-gray'}`}
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
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={`${errors.year ? 'border-light-red' : 'border-light-gray'}`}
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
            <div className="horizontal-line w-full">
              <hr />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DateForm;
