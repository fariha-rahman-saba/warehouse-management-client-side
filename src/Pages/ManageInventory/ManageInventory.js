import React from 'react';
import SingleItem from '../SingleItem/SingleItem';
import useItems from '../../hooks/useItems';
import './ManageInventory.css';

const ManageInventory = () => {

    const [items, setItems] = useItems();

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