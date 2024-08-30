import React from 'react';

const DisplayAge = ({ age }) => {
  return (
    <section className="age">
    <div className="age-display">
      <div className="age-years">
        <h2><span>{age ? age.years : '- -'}</span> years</h2>
      </div>
      <div className="age-months">
        <h2><span>{age ? age.months : '- -'}</span> months</h2>
      </div>
      <div className="age-days">
        <h2><span>{age ? age.days : '- -'}</span> days</h2>
      </div>
    </div>
  </section>
  );
};

export default DisplayAge;
