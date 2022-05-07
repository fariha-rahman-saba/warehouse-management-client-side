import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';
import useItems from '../../hooks/useItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [items, setItems] = useItems();

    // useEffect(() => {
    //     fetch('http://localhost:4000/items')
    //         .then(res => res.json())
    //         .then(data => setItems(data));
    // }, []);

    console.log(items);

    return (
        <div>
            <h1 className='text-center mt-5'>Inventory Items</h1>
            <div className='items'>
                {
                    items.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>
        </div>

    );
};

export default ManageInventory;