import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleItem.css';

const SingleItem = ({ item }) => {

    const { _id, name, short_desc, price, image } = item;

    const navigate = useNavigate();

    const goToItemDetails = _id => {
        navigate(`/manage-inventory/${_id}`);
    };

    return (
        <div className='item'>
            <img src={image} alt="" width="200px" height="130px" />
            <h4 className='mt-3'>{name}</h4>
            <p>{short_desc}</p>
            <h5>{price}</h5>
            <Button onClick={() => goToItemDetails(_id)}>Update Item</Button>
        </div>
    );
};

export default SingleItem;