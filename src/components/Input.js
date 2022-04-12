import React from 'react'

const Input = ({ label, type, name, placeholder, ...props }) => {
  return (
    <div>
      <label htmlFor='number'>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export default Input
