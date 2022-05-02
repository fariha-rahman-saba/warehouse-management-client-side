import React from 'react';
import { Button } from 'react-bootstrap';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg';
import SingleItem from '../SingleItem/SingleItem';

const Home = () => {
    const items = useItems();
    const displayItems = items.slice(6);

    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <h1>Inventory Items</h1>
            <div className='inventory-items-container'>
                {displayItems.map(item => <SingleItem key={item._id} item={item}></SingleItem>)}
            </div>
            <Button>Update Item</Button>
        </div>
    );
};

export default Home;