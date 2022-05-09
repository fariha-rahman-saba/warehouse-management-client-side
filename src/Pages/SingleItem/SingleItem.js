import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleItem.css';

const SingleItem = ({ item }) => {

    const { _id, name, short_desc, price, image, quantity, sold } = item;

    const navigate = useNavigate();

    const goToItemDetails = _id => {
        navigate(`/inventory/${_id}`);
    };

    return (
        <div className='single-item'>
            <img src={image} alt="" width="200px" height="200px" />
            <h4 className='mt-3'>{name}</h4>
            <p>{short_desc}</p>
            <h6>Price: {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Status: {sold ? "Sold" : "In Stock"}</h6>
            <Button variant="secondary" className='mt-2 mb-3' onClick={() => goToItemDetails(_id)}>Update Stock</Button>
        </div>
    );
};

export default SingleItem;
