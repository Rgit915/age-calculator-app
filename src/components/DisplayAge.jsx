import React from 'react';

const DisplayAge = ({ age }) => {
  return (
    <section className="age">
    <div className="age-display">
      <div className="age-years">
        <p><span>{age ? age.years : '- -'}</span> years</p>
      </div>
      <div className="age-months">
        <p><span>{age ? age.months : '- -'}</span> months</p>
      </div>
      <div className="age-days">
        <p><span>{age ? age.days : '- -'}</span> days</p>
      </div>
    </div>
  </section>
  );
};

export default DisplayAge;
