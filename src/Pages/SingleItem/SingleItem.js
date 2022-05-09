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
            <img src={image} alt="" width="200px" height="130px" />
            <h4 className='mt-3'>Item Name: {name}</h4>
            <p>Description: {short_desc}</p>
            <h5>Price: {price}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Sold: {sold ? "Sold" : "In Stock"}</h5>
            <Button variant="secondary" onClick={() => goToItemDetails(_id)}>Update Stock</Button>
        </div>
    );
};

export default SingleItem;
