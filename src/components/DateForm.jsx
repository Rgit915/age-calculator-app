const DateForm = () => {
  return (
    <section className="date-of-birth">
      <div className="date-form">
        <form>
          <div className="input-day">
            <label htmlFor="day">Day</label>
            <input type="number" id="day" name="day" />
          </div>
          <div className="input-month">
            <label htmlFor="month">Month</label>
            <input type="number" id="month" name="month" />
          </div>
          <div className="input-year">
            <label htmlFor="year">Year</label>
            <input type="number" id="year" name="year" />
          </div>

          <div className="arrow-button">
            <button type="submit">
              <img src="images/icon-arrow.svg" alt="Submit" />
            </button>
          </div>
          <div className="horizontal-line">
            <hr />
          </div>
        </form>
      </div>
    </section>
  );
};

export default DateForm;
