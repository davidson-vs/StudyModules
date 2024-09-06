import React from "react";

const InputComponent = (props) => {
    return (
        <>
            <label htmlFor={props.name}>{props.labelText}</label>
            <input 
                type={props.type}
                name={props.name} 
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                // {{props.is_required ? 'required': ''}}
            />
        </>
    )
    
}

export default InputComponent