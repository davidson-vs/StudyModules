import React from "react";

import "./styles/input.css"

const InputComponent = (props) => {
    return (
        <div className="input-block">
            <label htmlFor={props.name}>{props.labelText}</label>
            <input 
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                required={props.is_required ? true : false}
            />
        </div>
    )
    
}

export default InputComponent