import React, { useState } from 'react';

import DateForm from "./components/DateForm";
import DisplayAge from "./components/DisplayAge";
import { calculateAge } from './utils/calculateAge';

const App = () => {
  // State to store the birthDate information
  const [age, setAge] = useState(null);

  const handleDateSubmit = (date) => {
    const calculatedAge = calculateAge(date);
    setAge(calculatedAge);
  };
  return (
    <main className="container">
      <DateForm onDateSubmit={handleDateSubmit} />
      <DisplayAge age={age} />
    </main>
  );
};

export default App;
