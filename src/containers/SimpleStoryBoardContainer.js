import React, { useState, useContext, useReducer} from 'react'
import PropTypes from 'prop-types'
import StoryViewer from '../components/StoryViewer'
import { deleteStory, updateStory } from '../actions'

import { StoreDataContext } from '../reducers/index'
import * as types from '../constants/ActionTypes'
import EditStories from '../components/EditStories'
import CreateNew from '../components/CreateNew'

const SimpleStoryBoardContainer = ({ setShouldUpdate, isLoading }) => {
  const { value = [], dispatch } = useContext(StoreDataContext)
  const [isEdit, setIsEdit] = useState(false)
  const [isNew, setIsNew] = useState(false)
  const [currentPost, setCurrentPost] = useState({})

  function handleEdit(story) {
    setCurrentPost(story)
    setIsEdit(true)
  }

  function handleCancel(story) {
    setIsEdit(false)
    setIsNew(false)
  }

  function handleUpdate(story) {
    updateStory(story, dispatch)
    setIsEdit(false)
  }

  function handleSave(story) {
    setIsNew(false)
    setShouldUpdate(false)
    dispatch({
      type: types.ADD_STORY,
      value: story
    })
  }

  function handleCreateNew () {
    setIsNew(true)
  }

  function handleDelete (story) {
    deleteStory(story, dispatch);
  }

  if (isNew) {
    return (
      <CreateNew handleSave={handleSave} handleCancel={handleCancel} />
    )
  }

  if (isEdit) {
    return (
      <EditStories story={currentPost} handleUpdate={handleUpdate} handleCancel={handleCancel}/>
    )
  }
  
  function LoadingApi(props) {
    if (props.isLoading) {
      return <div class="api-loading">Loading...</div>;
    }
    return "";
  }

  return (
    <div class="post-body">
    <a href="#" onClick={() => handleCreateNew()}>Create new post</a>
    <LoadingApi isLoading={isLoading} />
    {
      value.map(story =>
        <StoryViewer
        key={story.id}
        story={story} handleEdit={handleEdit} handleDelete={handleDelete} />)
    }
    </div>)
}

SimpleStoryBoardContainer.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })).isRequired
}

export default SimpleStoryBoardContainer
