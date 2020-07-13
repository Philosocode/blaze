import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ name, onChange, placeholder, type, value }) => { 
  function renderInput() {
    return (
      <input
        type={type}
        className="c-form__input"
        placeholder={placeholder ?? nameCapitalized}
        id={name}
        name={name}
        required
        value={value}
        onChange={onChange}
      />
    );
  }

  function renderTextArea() {
    return (
      <textarea
        className="c-form__input"
        id={name}
        name={name}
        placeholder={placeholder ?? "Enter your message..."}
        rows={8}
        maxLength={999}
        required
        value={value}
        onChange={onChange}
      />
    )
  }

  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="c-form__group">
      {
        type === "textarea"
          ? renderTextArea()
          : renderInput()
      }
      {/* eslint-disable */}
      <label
        id={name}
        htmlFor={name}
        className="c-heading--condensed c-form__label"
      >{nameCapitalized}</label>
    </div>
  )
 }

 FormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default FormGroup;