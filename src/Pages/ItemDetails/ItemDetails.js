import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './ItemDetails.css';

const ItemDetails = () => {
    const [user, loading, error] = useAuthState(auth);

    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const url = `http://localhost:4000/items/${itemId}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    console.log(item);

    // Todo: update to database
    const handleRestock = (event) => {

        event.preventDefault();

        const { image, name, short_desc, price, supplierName, sold } = item;
        var { quantity } = item;
        console.log("quantity", quantity);
        quantity = parseInt(quantity);

        console.log("Old item: ", item);

        const add = parseInt(event.target.restock.value);
        // console.log("add", add);
        quantity += add;
        // console.log();
        quantity = "" + quantity;

        const updatedItem = { image, name, short_desc, price, quantity, supplierName, sold };
        console.log("updated item: ", updatedItem);

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updatedItem),
            headers: {
                'authorization': `${user.email}`,
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
            });
        // event.target.reset();
    };

    return (
        <div className='item'>
            <h1>seeing deTails for: {itemId}</h1>
            <img src={item.img} alt="" width="200px" height="130px" />
            <h4 className='mt-3'>Item name: {item.name}</h4>
            <p>Description: {item.short_desc}</p>
            <h5>Price: ${item.price}</h5>
            <h5>Quantity: {item.quantity}</h5>
            <h5>Supplier Name: {item.supplierName}</h5>

            {/* Restock form */}
            <h3 className='mt-3 mb-3'>Restock the Item</h3>
            <form onSubmit={handleRestock}>
                <div className="form-group">
                    <input type="number" className="form-control mt w-25 mx-auto" name='restock' placeholder="Enter stock quantity" />

                </div>
                <button type="submit" className="btn btn-secondary mt-3 w-25">Restock</button>
            </form>
        </div>
    );
};

export default ItemDetails;