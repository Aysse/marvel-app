/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import marvelLogo from '../../assets/marvel-logo.svg'
import heartIcon from '../../assets/heart-icon.svg'
import { useStateValue } from '../../context/apiContext';

function Header() {
    const { state, dispatch } = useStateValue();
    const handleHomeView = () => {
        dispatch({ type: 'SET_DATA', payload: { data: state.initialData, isInFavs: false } });
    }
    const handleFavView = () => {
        dispatch({ type: 'SET_DATA', payload: { data: state.favs, isInFavs: true } });
    }
    return (
        <div className='header-container'>
            <div onClick={handleHomeView}><img src={marvelLogo} className='marvel-logo' alt='Marvel logo' /></div>
            <div className='fav-div' onClick={handleFavView}>
                <img src={heartIcon} alt="Heart fav icon" />
                <div className='fav-text'>{state.favs.length}</div>
            </div>
        </div>
    )
}

export default Header