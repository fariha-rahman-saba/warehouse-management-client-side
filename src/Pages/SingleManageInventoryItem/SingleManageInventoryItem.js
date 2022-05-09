import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleManageInventoryItem.css';
import useItems from '../../hooks/useItems';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleManageInventoryItem = ({ item }) => {
    // const [items, setItems] = useItems();
    const { _id, image, name, price, supplierName, quantity } = item;

    const handleDelete = (id) => {
        const proceed = window.confirm("Confirm Delete?");
        if (proceed) {
            // console.log('deleting user with id, ', id);
            const url = `http://localhost:4000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Item Deleted!');

                    }
                });
        }
    };
    return (
        <div className='mt-5'>
            <div className='item-container'>
                <img src={image} alt="" />
                <div className='item-details-container'>
                    <div className='single-item-details'>
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