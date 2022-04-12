import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text, as }) => {
  const Tag = as
  return <Tag>{text}</Tag>
}

Title.propTypes = {
  text: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2']),
}

export default Title
