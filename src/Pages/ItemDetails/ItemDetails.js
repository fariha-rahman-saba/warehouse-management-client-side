import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './ItemDetails.css';

const ItemDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const { itemId } = useParams();
    const url = `https://mighty-beach-81550.herokuapp.com/items/${itemId}`;

    const [item, setItem] = useState({});


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const navigate = useNavigate();

    const goToManageInventory = () => {
        navigate(`/manage-inventory/`);
    };

    const handleDelivered = () => {

        const { email, image, name, short_desc, price, supplierName, sold } = item;
        var { quantity } = item;
        quantity = parseInt(quantity);
        quantity -= 1;

        const updatedItem = { email, image, name, short_desc, price, quantity, supplierName, sold };

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updatedItem),
            headers: {
                // 'authorization': `${user.email}`,
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                toast('Item Delivered! Please Refresh');
            });
    };

    const handleRestock = (event) => {

        event.preventDefault();

        const { email, image, name, short_desc, price, supplierName, sold } = item;
        var { quantity } = item;
        quantity = parseInt(quantity);
        const add = parseInt(event.target.restock.value);
        quantity += add;
        // const quantityElement = document.getElementById('quantityValue');
        // quantityElement.innerHTML = `${quantity}`;
        quantity = "" + quantity;

        const updatedItem = { email, image, name, short_desc, price, quantity, supplierName, sold };

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updatedItem),
            headers: {
                // 'authorization': `${user.email}`,
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                toast('Item Restocked! Please Refresh');
                event.target.reset();
            });

    };

    return (
        <div className='item-details mx-auto'>
            <img src={item.image} alt="" width="200px" height="200px" />
            <h4 className='mt-3'>{item.name}</h4>
            <p>{item.short_desc}</p>
            <h5>Price: ${item.price}</h5>
            <h5>Quantity: <span id='quantityValue'>{item.quantity}</span></h5>
            <h5>Supplier Name: {item.supplierName}</h5>
            <h5>Status: {item.sold ? "Sold" : "In Stock"}</h5>
            <button id='delivered-btn' type="submit" onClick={handleDelivered} className="btn btn-secondary mt-3 w-25">Delivered</button>
            <ToastContainer></ToastContainer>

            <hr className=' mt-5 w-50 mx-auto' />

            {/* Restock form */}
            <h3 className='mt-3 mb-3'>Restock the Item</h3>
            <form onSubmit={handleRestock}>
                <div className="form-group">
                    <input type="number" className="form-control mt w-25 mx-auto" name='restock' placeholder="Enter stock quantity" />

                </div>
                <button type="submit" className="btn btn-secondary mt-3 mb-3 w-25">Restock</button>
                <ToastContainer></ToastContainer>
                <br />
                <Button variant="warning" className='mb-5 w-25' onClick={() => goToManageInventory()}>Manage Inventory</Button>

            </form>
        </div>
    );
};

export default ItemDetails;