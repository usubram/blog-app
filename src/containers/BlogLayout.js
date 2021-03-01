import React, { useState, useEffect, useReducer } from 'react';
import SimpleStoryBoardContainer from './SimpleStoryBoardContainer'
import Nav from '../components/Nav'

import { fetchStories } from '../actions'
import reducer, { StoreDataContext } from '../reducers/index'

const BlogLayout = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchStories(dispatch, () => {
      setIsLoading(false);
    })
  }, [shouldUpdate]);

  return (
    <StoreDataContext.Provider value={{ value: state, dispatch }}>
      <div class="layout">
        <SimpleStoryBoardContainer setShouldUpdate={setShouldUpdate} isLoading={isLoading} />
        <Nav stories={state} />
      </div>
    </StoreDataContext.Provider>
  )
}

export default BlogLayout