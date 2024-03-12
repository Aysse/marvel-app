/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import { useStateValue } from './context/apiContext'
import useApiGetInitialData from './useApiGetInitialData'
import Body from './components/Body/Body'
import constants from './constants'

function App() {
  const { state, dispatch } = useStateValue();
  const { GET_ALL_CHARACTERS_ENDPOINT } = constants;

  useApiGetInitialData(GET_ALL_CHARACTERS_ENDPOINT, dispatch);
  return (
    <>
      <Header />
      <Search />
      <Body />
    </>
  )
}

export default App
