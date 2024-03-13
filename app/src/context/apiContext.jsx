/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useReducer } from 'react';

const ApiContext = createContext();

const initialState = {
  isLoading: true,
  initialData: [],
  favsViewData: [],
  data: [],
  favs: [],
  isInFavs: false,
  detailData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_INITIAL_DATA':
      return { ...state, isLoading: false, data: action.payload, initialData: action.payload, isInFavs: false };
    case 'SET_DATA':
      return { ...state, isLoading: false, data: action.payload.data, isInFavs: action.payload.isInFavs };
    case 'SET_FAVS_DATA':
      return { ...state, isLoading: false, favsViewData: action.payload.data };
    case 'ADD_FAVORITE':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favs: state.favs.filter((item) => item.id !== action.payload.id),
        data: state.isInFavs ? state.favs.filter((item) => item.id !== action.payload.id) : state.data,
      };
    case 'SET_DETAIL_DATA':
      return { ...state, isLoading: false, detailData: action.payload };
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
