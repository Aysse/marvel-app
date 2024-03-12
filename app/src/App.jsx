/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import GeneralView from './components/GeneralView/GeneralView'
import Search from './components/Search/Search'
import { useStateValue } from './context/apiContext'
import useApiGetInitialData from './useApiGetInitialData'
import Body from './components/Body/Body'
import constants from './constants'

function App() {
  return (
    <>
      <Header />
      <GeneralView />
    </>
  )
}

export default App
