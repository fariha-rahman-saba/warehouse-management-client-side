import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SingleManageInventoryItem.css';
import useItems from '../../hooks/useItems';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SingleManageInventoryItem = ({ item }) => {
    const { _id, email, image, name, price, supplierName, quantity } = item;

    const [user] = useAuthState(auth);
    var valid = false;


    if (user.email === email) {
        valid = true;
    }

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
                        toast('Item Deleted! Please Refresh');
                        // const remainingItems = items.filter(item => item._id !== id);
                        // setItems(remainingItems);
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


                    {
                        valid ?
                            <div> className="delete-container"
                                <button onClick={() => handleDelete(_id)} className='delete-button'>
                                    <FontAwesomeIcon className='delete-icon text-dark' icon={faTrash}></FontAwesomeIcon>
                                </button>
                                <ToastContainer></ToastContainer>
                            </div>
                            : <></>

                    }

                </div>
            </div>

        </div >
    );
};

export default SingleManageInventoryItem;