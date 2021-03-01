import stories from '../api/stories'
import * as types from '../constants/ActionTypes'

export const fetchStories = (dispatch, cb) => {
  stories.fetchStories(stories => {
    cb();
    dispatch({
      type: types.FETCH_STORIES,
      value: stories
    });
  })
}

export const updateStory = (modifiedStory, dispatch) => {
  stories.updateStory(modifiedStory, (story) => {
    dispatch({
      type: types.UPDATE_STORY,
      value: story
    })
  })
}

export const deleteStory = (toBeDeletedStory, dispatch) => {
  stories.deleteStory(toBeDeletedStory, () => {
    dispatch({
      type: types.DELETE_STORY,
      value: toBeDeletedStory
    })
  })
}
