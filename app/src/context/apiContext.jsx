/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useReducer } from 'react';

const ApiContext = createContext();

const initialState = {
  isLoading: false,
  initialData: [],
  data: [],
  favs: [],
  isInFavs: false,
  detailData: { image: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860/standard_fantastic.jpg', name: 'Adam Warlock', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor egestas elit, quis molestie nunc rhoncus in. Phasellus enim tellus, imperdiet viverra dolor pharetra, bibendum dictum libero. In at felis et turpis pellentesque pellentesque ac fringilla lacus. Ut placerat est eget tempor sollicitudin. Pellentesque sit amet nisl vitae odio tempus. ' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_INITIAL_DATA':
      return { ...state, isLoading: false, data: action.payload, initialData: action.payload, isInFavs: false };
    case 'SET_DATA':
      return { ...state, isLoading: false, data: action.payload.data, isInFavs: action.payload.isInFavs };
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
