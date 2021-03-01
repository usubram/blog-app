import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import reducer from '../reducers'
import * as types from '../constants/ActionTypes'

const EditStories = ({ story, handleCancel, handleUpdate }) => {

  const handleStoryChange = (e) => {
    story.text = e.target.value
  }

  return (<div class='post-edit-body'>
    <h2>Edit Post</h2>
    <h3>{story.title}</h3>
    <textarea class='edit-post-txt' onChange={handleStoryChange}>{story.text}</textarea>
    <button onClick={() => handleUpdate(story)}>Update</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>)
}

EditStories.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  }).isRequired
}

export default EditStories
