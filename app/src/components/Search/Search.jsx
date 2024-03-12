/* eslint-disable no-unused-vars */
import React from 'react'
import './Search.css'
import { useStateValue } from '../../context/apiContext';

function Search() {
  const { state, dispatch } = useStateValue();
  const results = state.data ? state.data.length : 0;
  const resultsString = results === 1 ? 'result' : 'results';
  return (
    <div className='search-container'>
        <input type='text' className='search-input' placeholder='SEARCH A CHARACTER...' />
        <p className='search-results'>{results} {resultsString}</p>
    </div>
  )
}

export default Search
