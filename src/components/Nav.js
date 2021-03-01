import React, { useReducer } from 'react';
import PropTypes from 'prop-types'

const Nav = ({ stories=[] }) => {

  const formatDate = (timestamp) =>
    new Date(timestamp).toLocaleDateString()

  return (<div class='post-nav'>
    <h3>Past Posts</h3>
    {
      stories.map(story => {
        return (
          <a href={'#' + story.id} key={story.id}>{formatDate(story.timestamp)} - {story.title}</a>
          )
        }
      )
    }
  </div>)
}

Nav.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default Nav
