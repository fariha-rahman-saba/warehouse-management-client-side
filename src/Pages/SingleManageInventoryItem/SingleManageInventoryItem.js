import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleManageInventoryItem.css';

const SingleManageInventoryItem = ({ item }) => {
    const { image, name, price, supplierName, quantity } = item;
    const handleDelete = (id) => {

    };
    return (
        <div className="container">
            <div className='item'>
                <img src={image} alt="" />
                <div className='item-details-container'>
                    <div className='item-details'>
                        <p>{name}</p>
                        <p>Supplier: {supplierName}</p>
                        <p>Price: ${price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>


                    <div className="delete-container">
                        <button className='delete-button'>
                            <FontAwesomeIcon className='delete-icon text-dark' icon={faTrash}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                {/* onClick={() => handleDelete(product)} */}
            </div>
        </div>
    );
};

export default SingleManageInventoryItem;