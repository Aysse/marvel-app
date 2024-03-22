/* eslint-disable no-unused-vars */
import React from 'react'
import './ComicsAlbum.css'
import PropTypes from 'prop-types';
import { useStateValue } from '../../context/apiContext';

function ComicsAlbum({ items }) {
    return (
        <div className="horizontal-scroll-container">
            <div className="scroll-content">
                {items.map((item, index) => {

                    const imageSize = 'portrait_fantastic';
                    const image = `${item.image.path}/${imageSize}.${item.image.extension}`;
                    return (
                        <div key={index} className="scroll-item">
                            <img className='comic-img' src={image} alt={item.title} />
                            <p className='comic-title'>{item.title}</p>
                            <p className='comic-year'>{item.year}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

ComicsAlbum.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ComicsAlbum
