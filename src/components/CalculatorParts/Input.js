//libs
import React from "react";

const Input = ({name, unitOfMeasurement, stateValue, onChangeHandler, subjectTag}) => {
    return (
        <div className="input-container">
            {subjectTag === 'financial' ? 
                <label>
                (${unitOfMeasurement}){name}
                </label>
                :
                <label>
                {name}(${unitOfMeasurement})
                </label>
            }
            <input value={stateValue} type="number" onChange={e => onChangeHandler(name, e.target.value)}/>
        </div>
    );
};

export default Input;