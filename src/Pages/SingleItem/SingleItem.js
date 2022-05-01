import React from 'react';
import './SingleItem.css';

const SingleItem = ({ item }) => {

    const { name, short_desc, price, image } = item;
    return (
        <div className='item'>
            <img src={image} alt="" width="200px" height="130px" />
            <h4 className='mt-3'>{name}</h4>
            <p>{short_desc}</p>
            <h5>{price}</h5>
        </div>
    );
};

export default SingleItem;