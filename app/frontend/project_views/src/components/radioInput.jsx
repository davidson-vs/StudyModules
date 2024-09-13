import React from 'react';
import './styles/radio.css';

const getOptionsComponent = (options, selectedValue, onChange) => {
  return options.map((option, index) => (
    <div key={index} className="radio-input-container">
      <label htmlFor={option.id} className="radio-input-label">
        {option.label}
      </label>
      <input
        type="radio"
        id={option.id}
        name={option.name}
        value={option.value}
        checked={selectedValue === option.value}
        onChange={onChange}
        className="radio-input"
      />
    </div>
  ));
};

const RadioInput = (props) => {
  return (
    <div className="radio-input-group">
      {props.label && <label className="radio-group-label">{props.label}</label>}
      {getOptionsComponent(props.options, props.selectedValue, props.onChange)}
    </div>
  );
};

export default RadioInput;
