/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import heartEmpty from '../../assets/heart-empty.svg';
import heartIcon from '../../assets/heart-icon.svg';
import './Card.css'

function Card({
    id,
    name = 'Name',
    image = 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860/standard_large.jpg',
    fav = false
}) {

    return (
      <div className='card-container'>
        <img className='card-img' src={image} alt={name} />
        <div className='card-info'>
          <p className='card-name'>{name}</p>
          <button className='card-fav-button'>
            <img className='card-fav-icon' src={fav ? heartEmpty : heartIcon} />
          </button>
        </div>
      </div>
    )
  }

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fav: PropTypes.bool
};

export default Card;
