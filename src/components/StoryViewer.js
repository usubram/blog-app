import React, { useState, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types'

const StoryViewer = ({ title, story, handleEdit, handleDelete }) => {

  const formatDate = (timestamp) =>
    new Date(timestamp).toLocaleDateString()

  return (
    <div class='post-row'>
      <h3 class='post-title' id={story.id}>{story.title}</h3>
      <div class='post-time'>{formatDate(story.timestamp)}</div>
      <p class='post-text'>{story.text}</p>
      <a href='#' id={'edit-'+ story.id} onClick={() => handleEdit(story)}>Edit</a>
      <a href='#' id={'delete-'+ story.id} onClick={() => handleDelete(story)}>Delete</a>
    </div>
  )
}

StoryViewer.propTypes = {
  story: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default StoryViewer
