import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleManageInventoryItem.css';
import useItems from '../../hooks/useItems';
import { toast, ToastContainer } from 'react-toastify';

const SingleManageInventoryItem = ({ item }) => {
    // const [items, setItems] = useItems();
    const { _id, image, name, price, supplierName, quantity } = item;

    const handleDelete = (id) => {
        const proceed = window.confirm("Confirm Delete?");
        if (proceed) {
            const url = `https://mighty-beach-81550.herokuapp.com/items${id}`;
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log("item deleted");
                        // toast("Item deteted");
                        // const remainingItems = items.filter(item => item._id !== id);
                        // setItems(remainingItems);
                    }
                });
        }
    };
    return (
        <div className="inventory-container">
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
                        <button onClick={() => handleDelete(_id)} className='delete-button'>
                            <FontAwesomeIcon className='delete-icon text-dark' icon={faTrash}></FontAwesomeIcon>
                        </button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default SingleManageInventoryItem;