/* eslint-disable no-unused-vars */
import React from 'react'
import Search from '../Search/Search'
import Body from '../Body/Body'
import constants from '../../constants'
import { useStateValue } from '../../context/apiContext'
import useApi from '../../hooks/useApi'
import Header from '../Header/Header'

function GeneralView() {
  const { state, dispatch } = useStateValue();
  const { GET_CHARACTERS_ENDPOINT: url } = constants;
  const type = 'SET_INITIAL_DATA';

  useApi({ url, state, dispatch, type });
  
  return (
    <>
      <Header />
      <Search />
      <Body />
    </>
  )
}

export default GeneralView
