//libs
import React from 'react';

const SolutionDisplay = ({solution, solutionUM, subjectTag}) => {
    return (
        <div className='solution-display'>
            <header className="solution">
                {subjectTag === 'financial' || subjectTag === 'mathematics' ?
                    <h4>
                        <span>{solutionUM}</span>    {solution}
                    </h4>
                    :
                    <h4>
                        {solution}<span>{solutionUM}</span>
                    </h4>
                }
            </header>
        </div>
    );
};

export default SolutionDisplay;