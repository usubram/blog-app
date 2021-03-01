import React, { useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import storiesApi from '../api/stories'

const CreateNew = ({handleCancel, handleSave }) => {
  let story = {
    id: '',
    timestamp: new Date().toISOString(),
    title: '',
    text: ''
  }

  const handleStoryTitleChange = (e) => {
    story.title = e.target.value
  }

  const handleStoryBodyChange = (e) => {
    story.text = e.target.value
  }

  const handleSaveStory = (newEntry) => {
    storiesApi.createStory(newEntry, (story) => {
      handleSave(story);
    })
  }

  return (<div class='post-edit-body'>
    <h2>Create a new post</h2>
    <lable for='create-new-title'>Title:</lable>
    <input class='create-new-title' id='create-new-title'type="text" onChange={handleStoryTitleChange}></input>
    <lable for='create-new-title'>Body:</lable>
    <textarea class='create-new-text' onChange={handleStoryBodyChange}></textarea>
    <button onClick={() => handleSaveStory(story)}>Save</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>)
}

CreateNew.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  }).isRequired
}

export default CreateNew
