/* eslint-disable no-unused-vars */
import React from 'react'
import Search from '../Search/Search'
import Body from '../Body/Body'
import constants from '../../constants'
import { useStateValue } from '../../context/apiContext'
import useApiGetInitialData from '../../useApiGetInitialData'

function App() {
  const { state, dispatch } = useStateValue();
  const { GET_CHARACTERS_ENDPOINT } = constants;

  useApiGetInitialData(GET_CHARACTERS_ENDPOINT, state, dispatch);
  
  return (
    <>
      <Search />
      <Body />
    </>
  )
}

export default App
