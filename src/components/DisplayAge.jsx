import React from 'react'

const DisplayAge = () => {
  return (
    <section className='age'>
      <div className="age-display ">
        <div className="age-years">
          <p><span>- -</span> years</p>
        </div>
        <div className="age-months">
          <p><span>- -</span> months</p>
        </div>
        <div className="age-days">
          <p><span>- -</span> days</p>
        </div>
      </div>
    </section>
  )
}

export default DisplayAge