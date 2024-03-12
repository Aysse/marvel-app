/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useReducer } from 'react';

const ApiContext = createContext();

const initialState = {
  data: null,
  searchResults: [],
  favs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favs: state.favs.filter((item) => item.id !== action.payload.id),
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
