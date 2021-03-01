import React from 'react';
import * as types from '../constants/ActionTypes'

export const StoreDataContext = React.createContext();

export default (state = [], { type , value }) => {
  switch (type) {

    case types.FETCH_STORIES:
      return value.sort((a, b) => {
        // Sort by date
        return new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf()
      })
  
    case types.UPDATE_STORY:
      let selectedItem = state.filter(item => item.id === value.id)
      selectedItem = value;
      return state;
  
    case types.ADD_STORY:
      // place the new value in the first place. No need to sort.
      return [value, ...state]

    case types.DELETE_STORY:
      return state.filter(item => item.id !== value.id);

    default: {
        return state
      }
  }
}
