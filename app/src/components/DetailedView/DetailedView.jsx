/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../context/apiContext';
import constants from '../../constants';
import useApi from '../../hooks/useApi';
import heartEmpty from '../../assets/heart-empty.svg';
import heartIcon from '../../assets/heart-icon.svg';
import ComicsAlbum from '../ComicsAlbum/ComicsAlbum';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import './DetailedView.css';

function DetailedView() {
    const { state, dispatch } = useStateValue();
    const { id: idStr } = useParams();
    const id = parseInt(idStr);
    
    const imageSize = 'standard_fantastic';

    const { GET_CHARACTER_BY_ID_ENDPOINT } = constants;
    const type = 'SET_DETAIL_DATA';
    const endpoint = `${GET_CHARACTER_BY_ID_ENDPOINT}/${id}`;

    useApi({ url: endpoint, state, dispatch, type });

    const handleFav = () => {
        if (state.detailData) {
            const fav = state.favs.some((fav) => fav.id === id);
            if (fav) {
                dispatch({ type: 'REMOVE_FAVORITE', payload: { id } });
            } else {
                console.log('state.detailData', state.detailData);
                dispatch({
                    type: 'ADD_FAVORITE',
                    payload: { id, name: state.detailData.name, image: state.detailData.image },
                });
            }
        }
    };

    return (
        <>
            {state.isLoading || !state.detailData ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <section className='character-container'>
                        <div className='character-div'>
                            <img
                                className='character-img'
                                src={`${state.detailData.image.path}/${imageSize}.${state.detailData.image.extension}`}
                                alt={state.detailData.name}
                            />
                            <div className='character-info'>
                                <div className='character-title'>
                                    <h1>{state.detailData.name}</h1>
                                    <button onClick={handleFav}>
                                        <img className='fav-icon' alt='favorite' src={state.favs.some((fav) => fav.id === id) ? heartIcon : heartEmpty} />
                                    </button>
                                </div>
                                <p className='character-description'>{state.detailData.description}</p>
                            </div>
                        </div>
                    </section>
                    <section className='comics-container'>
                        <div className='comics-div'>
                            <h2>Comics</h2>
                            {state.detailData.comics.length > 0 ? (
                                <ComicsAlbum fav={true} items={state.detailData.comics || []} />
                            ) : (
                                <p>No comics available</p>
                            )}
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default DetailedView;
