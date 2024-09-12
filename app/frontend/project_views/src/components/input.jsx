import React, {useState} from "react";

import "./styles/input.css"


const InputComponent = (props) => {

    const [isInvalid, setIsInvalid] = useState(false);

    const handleBlur = (event) => {
        const inputElement = event.target;
        
        if (!inputElement.validity.valid) {
            setIsInvalid(true);
        }
        else {
            setIsInvalid(false);
        }
    };

    return (
        <div className={`input-block ${isInvalid ? "invalid-input": ""}`}>
            <label htmlFor={props.name}>{props.labelText}</label>
            <input 
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                id={props.id}
                value={props.value}
                maxLength={props.maxLength}
                onChange={props.onChange}
                required={props.is_required ? true : false}
                onBlur={handleBlur}
            />
        </div>
    )
    
}

export default InputComponent