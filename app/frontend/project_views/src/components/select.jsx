import React from "react";

import "./styles/select.css"


const getOptionsComponent = (options) => {
    return options.map(
        (el, index) => {
            return <option value={el.value} key={index} className="select-option"> {el.label} </option>
        }
    )
}


const SelectBoxComponent = (props) => {
    return (
        <div className="select-container">
            <label className="select-label">{props.label}</label>
            <select name={props.name} id={props.id} className="select-box" onChange={props.onChange} required={props.required}>
            <option value="" disabled selected>Selecione uma opção</option>
                {getOptionsComponent(props.options)}
            </select>
        </div>
    )
}

export default SelectBoxComponent