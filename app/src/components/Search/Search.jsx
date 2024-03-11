/* eslint-disable no-unused-vars */
import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='search-container'>
        <input type='text' className='search-input' placeholder='SEARCH A CHARACTER...' />
        <p className='search-results'> 50 results</p>
    </div>
  )
}

export default Search
