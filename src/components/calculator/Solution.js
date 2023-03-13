//libs
import React from 'react';

const Solution = ({ solution, solutionUM }) => {
  return (
    <div className='solution-container'>
      <h3 className='solution'>
        {solution} {solutionUM}
      </h3>
    </div>
  );
};

export default Solution;
