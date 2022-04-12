import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ as, children }) => {
  const Tag = as
  return <Tag>{children}</Tag>
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'span']),
}

export default Text
