/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Search.css'
import { useStateValue } from '../../context/apiContext';
import constants from '../../constants';

function Search() {
  const { state, dispatch } = useStateValue();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const fetchData = async () => {
        if (searchTerm === '') dispatch({ type: 'SET_DATA', payload: { data: state.initialData } });
        else {
          dispatch({ type: 'SET_LOADING', payload: true });
          const { GET_CHARACTERS_ENDPOINT } = constants;
          const endpoint = `${GET_CHARACTERS_ENDPOINT}/${searchTerm}`;
          try {
            const response = await fetch(endpoint);
            const data = await response.json() || [];
            dispatch({ type: 'SET_DATA', payload: { data } });
          } catch (error) {
            dispatch({ type: 'SET_DATA', payload: { data: [] } });
            console.error(`Error fetching data from ${endpoint}:`, error);
          }
        }
      }

      fetchData();
    }
  };

  const results = state.data ? state.data.length : 0;
  const resultsString = results === 1 ? 'result' : 'results';
  return (
    <div className='search-container'>
      <input type='text' className='search-input' placeholder='SEARCH A CHARACTER...' onChange={handleInputChange} onKeyDown={handleEnterKeyPress} />
      <p className='search-results'>{results} {resultsString}</p>
    </div>
  )
}

export default Search
