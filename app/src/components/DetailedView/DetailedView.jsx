/* eslint-disable no-unused-vars */
import React from 'react'
import constants from '../../constants'
import { useStateValue } from '../../context/apiContext'
import useApi from '../../hooks/useApi'
import './DetailedView.css'
import heartEmpty from '../../assets/heart-empty.svg'

import PropTypes from 'prop-types';
import ComicsAlbum from '../ComicsAlbum/ComicsAlbum'

function DetailedView({ id = 1010354 }) {
    const { state, dispatch } = useStateValue();
    const { GET_CHARACTER_BY_ID_ENDPOINT } = constants;
    const type = 'SET_DETAIL_DATA';
    const url = `${GET_CHARACTER_BY_ID_ENDPOINT}/${id}`;

    useApi({ url, state, dispatch, type });
    const imageSize = 'standard_fantastic';
    const image = `${state.detailData.image.path}/${imageSize}.${state.detailData.image.extension}`;
    return (
        <>
            {state.isLoading ? <p>Loading...</p> : (
                <>
                    <section className='character-container'>
                        <div className='character-div'>
                            <img className='character-img' src={image} alt={state.detailData.name} />
                            <div className='character-info'>
                                <div className='character-title'>
                                    <h1>{state.detailData.name}</h1>
                                    <img className='fav-icon' src={heartEmpty} alt='favorite' />
                                </div>
                                <p className='character-description'>{state.detailData.description}</p>
                            </div>
                        </div>
                    </section>
                    <section className='comics-container'>
                        <div className='comics-div'>
                            <h2>Comics</h2>
                            <ComicsAlbum  items={state.detailData.comics || []} />
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

DetailedView.propTypes = {
    id: PropTypes.number.isRequired,
};

export default DetailedView
