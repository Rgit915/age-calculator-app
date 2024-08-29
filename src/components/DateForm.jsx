const DateForm = () => {
  return (
    <section className="date-of-birth flex flex-row uppercase text-sm">
      <div className="date-form">
        <form>
          <div className="date-input">
            <div className="input-day ">
              <label htmlFor="day">Day</label>
              <input type="number" id="day" name="day" placeholder="DD" />
            </div>
            <div className="input-month">
              <label htmlFor="month">Month</label>
              <input type="number" id="month" name="month" placeholder="MM" />
            </div>
            <div className="input-year">
              <label htmlFor="year">Year</label>
              <input type="number" id="year" name="year" placeholder="YYYY" />
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
