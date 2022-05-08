import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './ItemDetails.css';

const ItemDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const { itemId } = useParams();
    const url = `http://localhost:4000/items/${itemId}`;

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
                console.log(result);
            });

    };

    // Todo: update to database
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
                console.log(result);
                event.target.reset();
            });

    };

    return (
        <div className='item-details'>
            <img src={item.img} alt="" width="200px" height="130px" />
            <h4 className='mt-3'>Item name: {item.name}</h4>
            <p>Description: {item.short_desc}</p>
            <h5>Price: ${item.price}</h5>
            <h5>Quantity: <span id='quantityValue'>{item.quantity}</span></h5>
            <h5>Supplier Name: {item.supplierName}</h5>
            <h5>Sold: {item.sold ? "Sold" : "In Stock"}</h5>
            <button type="submit" onClick={handleDelivered} className="btn btn-secondary mt-3 w-25">Delivered</button>

            {/* Restock form */}
            <h3 className='mt-3 mb-3'>Restock the Item</h3>
            <form onSubmit={handleRestock}>
                <div className="form-group">
                    <input type="number" className="form-control mt w-25 mx-auto" name='restock' placeholder="Enter stock quantity" />

                </div>
                <button type="submit" className="btn btn-secondary mt-3 mb-3 w-25">Restock</button>
                <br />
                <Button variant="warning" className='mb-5 w-25' onClick={() => goToManageInventory()}>Manage Inventory</Button>

            </form>
        </div>
    );
};

export default ItemDetails;