/* eslint-disable no-unused-vars */
import React from 'react'
import './Search.css'
import { useStateValue } from '../../context/apiContext';

function Search() {
  const { state, dispatch } = useStateValue();
  return (
    <div className='search-container'>
        <input type='text' className='search-input' placeholder='SEARCH A CHARACTER...' />
        <p className='search-results'>{state.data ? state.data.length : 0} results</p>
    </div>
  )
}

export default Search
