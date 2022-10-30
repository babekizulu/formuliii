//libs
import React from "react";

const Input = ({name, unitOfMeasurement, stateValue, onChangeHandler}) => {
    return (
        <div className="input-container">
            <label>
                {name}
            </label>
            <input placeholder={`${name} in ${unitOfMeasurement}`} value={stateValue} type="number" onChange={e => onChangeHandler(name, e.target.value)}/>
        </div>
    );
};

export default Input;