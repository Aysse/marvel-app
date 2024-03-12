/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateValue } from '../../context/apiContext';
import Card from '../Card/Card';
import './Body.css'

function Body() {
    const { state, dispatch } = useStateValue();
    return (
        <div>
            {!state.isLoading ? (
                <div className='characters-found'>
                    {state.data.map(element => {
                        const fav = state.favs.some(fav => fav.id === element.id);
                        return <Card key={element.id} id={element.id} name={element.name} image={element.image} fav={fav} />
                    })}
                </div>
            ) : (
                <div className='loader-div'>
                    <span className='loader'></span>
                </div>
            )}
        </div>
    )
}

export default Body;
