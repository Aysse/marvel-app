/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Body from '../Body/Body'
import { useStateValue } from '../../context/apiContext'
import './FavView.css'

function FavView() {
    const { state, dispatch } = useStateValue();

    useEffect(() => {
        dispatch({ type: 'SET_FAVS_DATA', payload: { data: state.favs } });
    }, [state.favs, dispatch]);

    return (
        <>
            <Header />
            <h1 className='section-title'>FAVORITES</h1>
            <Search fromFavs={true}/>
            <Body data={state.favsViewData} />
        </>
    )
}

export default FavView
