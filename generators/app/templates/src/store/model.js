import PropTypes from 'prop-types'

export const SHAPE_TODO = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
})
