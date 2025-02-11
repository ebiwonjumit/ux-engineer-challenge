import React from "react"
import PropTypes from "prop-types"
import "./Input.scss"

export const Input = ({ id, onChange, placeholder, type = "text", value }) => {
  return (
    <input
      className="input"
      id={id}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}
