import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const url = `http://localhost:4000/items/${itemId}`;
    console.log(url);
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    console.log(item);

    // Todo: update to database
    const handleRestock = (event) => {
        const add = event.target.restock.value;
        const newQuantity = item.quantity + add;

    };

    return (
        <div className='item'>
            <h1>seeing deTails for: {itemId}</h1>
            <img src={item.img} alt="" width="200px" height="130px" />
            <h4 className='mt-3'>Item name: {item.name}</h4>
            <p>Description: {item.desc}</p>
            <h5>Price: ${item.price}</h5>
            <h5>Quantity: {item.quantity}</h5>
            <h5>Supplier Name: {item.name}</h5>

            {/* Restock form */}
            <h3 className='mt-3 mb-3'>Restock the Item</h3>
            <form onSubmit={handleRestock}>
                <div className="form-group">
                    <input type="number" className="form-control mt w-25 mx-auto" name='restock' placeholder="Enter stock quantity" />

                </div>
                <button type="submit" name='restock' className="btn btn-secondary mt-3 w-25">Restock</button>
            </form>
        </div>
    );
};

export default ItemDetails;