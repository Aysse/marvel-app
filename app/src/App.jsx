/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import { useStateValue } from './context/apiContext'
import useApi from './useApi'
import Body from './components/Body/Body'
import constants from './constants'

function App() {
  const { state, dispatch } = useStateValue();
  const { GET_ALL_CHARACTERS_ENDPOINT } = constants;

  useApi(GET_ALL_CHARACTERS_ENDPOINT, dispatch, 'SET_DATA');

  return (
    <>
      <Header />
      <Search />
      <Body />
    </>
  )
}

export default App
