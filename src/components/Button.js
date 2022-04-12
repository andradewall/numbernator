import React from 'react'

const Button = ({ type, children, styles }) => {
  console.log('🚀 ~ file: Button.js ~ line 4 ~ Button ~ styles', styles)
  return (
    <button className={`button ${styles.join(' ')}`} type={type}>
      {children}
    </button>
  )
}

export default Button
