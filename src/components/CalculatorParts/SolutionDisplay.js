//libs
import React from 'react';

const SolutionDisplay = ({solution, solutionUM}) => {
    return (
        <div className='solution-display'>
            <header className="solution">
                <h4>
                    {solution}<span>{solutionUM}</span>
                </h4>
            </header>
        </div>
    );
};

export default SolutionDisplay;