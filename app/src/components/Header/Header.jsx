/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import marvelLogo from '../../assets/marvel-logo.svg'
import heartIcon from '../../assets/heart-icon.svg'
import { useStateValue } from '../../context/apiContext';

function Header() {
    const { state, dispatch } = useStateValue();
    const handleBackClick = () => {
        dispatch({ type: 'SET_DETAIL_DATA', payload: null });
    }
    return (
        <div className='header-container'>
            <Link to={'/'} onClick={handleBackClick}><img src={marvelLogo} className='marvel-logo' alt='Marvel logo' /></Link>
            <Link to={'/favs'} className='fav-div' onClick={handleBackClick}>
                <img src={heartIcon} alt="Heart fav icon" />
                <div className='fav-text'>{state.favs.length}</div>
            </Link>
        </div>
    )
}

export default Header