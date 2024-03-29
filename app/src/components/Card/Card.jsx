/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import heartEmpty from '../../assets/heart-empty.svg';
import heartIcon from '../../assets/heart-icon.svg';
import heartIconHover from '../../assets/heart-icon-hover.svg';
import './Card.css'
import { useStateValue } from '../../context/apiContext';

function Card({
  id,
  name = 'Name',
  image = '',
  fav = false
}) {
  const { state, dispatch } = useStateValue();
  const [isHover, setHover] = useState(false);
  const imageSize = 'standard_large';
  const handleFav = () => {
    if (fav) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: { id } });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: { id, name, image } });
    }
  }

  return (
    <div className='card-container' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Link className='card-img' to={`/${id}`} >
        <img className='card-img' src={`${image.path}/${imageSize}.${image.extension}`} alt={`${name} image`} />
      </Link>
      <span className='divider' />
      <div className='card-info'>
        <Link className='card-name' to={`/${id}`} >
          <p>{name}</p>
        </Link>
        <button className='card-fav-button' onClick={handleFav}>
          <img className='card-fav-icon' alt='Favorite' src={fav ? (isHover ? heartIconHover : heartIcon) : heartEmpty} />
        </button>
      </div>
    </div>

  )
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.object,
  fav: PropTypes.bool
};

export default Card;
