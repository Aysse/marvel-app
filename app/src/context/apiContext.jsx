/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useReducer } from 'react';

const ApiContext = createContext();

const initialState = {
  initialData: [],
  data: null,
  searchResults: [],
  favs: [],
  isInFavs: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_DATA':
      return { ...state, data: action.payload, initialData: action.payload, isInFavs: false };
    case 'SET_DATA':
      return { ...state, data: action.payload.data, isInFavs: action.payload.isInFavs };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favs: state.favs.filter((item) => item.id !== action.payload.id),
        data: state.isInFavs ? state.favs.filter((item) => item.id !== action.payload.id) : state.data,
      };
    default:
      return state;
  }
};

const ApiProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ApiContext.Provider value={{ state, dispatch }}>{children}</ApiContext.Provider>
    );
};

const useStateValue = () => useContext(ApiContext);

export { ApiProvider, useStateValue };
