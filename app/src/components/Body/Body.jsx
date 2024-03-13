/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateValue } from '../../context/apiContext';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import './Body.css'
import PropTypes from 'prop-types';

function Body({ data }) {
    const { state, dispatch } = useStateValue();
    const dataToShow = data || state.data;
    
    return (
        <div>
            {!state.isLoading ? (
                <div className='characters-found'>
                    {dataToShow.map(element => {
                        const fav = state.favs.some(fav => fav.id === element.id);
                        return <Card key={element.id} id={element.id} name={element.name} image={element.image} fav={fav} />
                    })}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}

Body.propTypes = {
    data: PropTypes.array,
};

export default Body;
