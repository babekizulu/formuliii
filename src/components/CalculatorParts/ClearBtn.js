//libs
import React from 'react';

const ClearBtn = ({clearHandler}) => {
    return (
        <div className='clear-btn-container'>
            <button className="clear-btn" onClick={() => clearHandler()}>
                AC
            </button>
        </div>
    );
};

export default ClearBtn;