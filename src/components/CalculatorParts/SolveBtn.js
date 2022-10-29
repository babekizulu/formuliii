//libs
import React from 'react';

const SolveBtn = ({solutionHandler}) => {
    return (
        <div className='solve-btn-container'>
            <button className="solve-btn" onClick={() => solutionHandler()}>
                =
            </button>
        </div>
    );
};

export default SolveBtn;