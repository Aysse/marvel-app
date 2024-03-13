/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Search.css'
import { useStateValue } from '../../context/apiContext';
import constants from '../../constants';
import PropTypes from 'prop-types';


function Search({ fromFavs = false }) {
  const { state, dispatch } = useStateValue();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (fromFavs) {
        const filteredData = state.favs.filter((fav) => fav.name.toLowerCase().includes(searchTerm.toLowerCase()));
        dispatch({ type: 'SET_FAVS_DATA', payload: { data: filteredData } })
      }

      else {
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
    }
  };

  const results = !fromFavs ? (state.data ? state.data.length : 0) : (state.favsViewData ? state.favsViewData.length : 0);
  // const results = state.favsViewData ? state.favsViewData.length : 0;

  const resultsString = results === 1 ? 'result' : 'results';
  return (
    <div className='search-container'>
      <input type='text' className='search-input' placeholder='SEARCH A CHARACTER...' onChange={handleInputChange} onKeyDown={handleEnterKeyPress} />
      <p className='search-results'>{results} {resultsString}</p>
    </div>
  )
}


Search.propTypes = {
  fromFavs: PropTypes.bool,
};

export default Search
