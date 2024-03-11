/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import marvelLogo from '../../assets/marvel-logo.svg'
import heartIcon from '../../assets/heart-icon.svg'

function Header() {

    return (
        <div className='header-container'>
            <img src={marvelLogo} className='marvel-logo' alt='Marvel logo' />
            <div className='fav-div'>
                <img src={heartIcon} alt="Heart fav icon" />
                <div className='fav-text'>3</div>
            </div>
        </div>
    )
}

export default Header