import React, { useEffect, useState } from 'react';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg';
import SingleItem from '../SingleItem/SingleItem';
import './Home.css';

const Home = () => {
    const [items, setItems] = useItems();

    // useEffect(() => {
    //     fetch('http://localhost:4000/items')
    //         .then(res => res.json())
    //         .then(data => setItems(data));
    // }, []);

    console.log("items: ", items);
    const displayItems = items.slice(6);
    // console.log(displayItems);

    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <h1 className='mt-5'>Inventory Items</h1>
            <div className='inventory-items-container'>
                {
                    displayItems.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>

            <h1>About Us</h1>
            <h1>Privacy Policy</h1>

        </div>
    );
};

export default Home;