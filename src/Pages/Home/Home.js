import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg';
import SingleItem from '../SingleItem/SingleItem';
import './Home.css';

const Home = () => {
    const [items] = useItems();

    const displayItems = items.slice(0, 6);
    const navigate = useNavigate();

    const goToManageInventory = () => {
        navigate(`/manage-inventory/`);
    };

    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <h1 className='mt-5'>Inventory Items</h1>
            <div className='inventory-items-container'>
                {
                    displayItems.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>

            <Button variant="warning" className='mb-5 w-25' onClick={() => goToManageInventory()}>Manage Inventory</Button>

            <h1>User's Feedback</h1>
            <div className='about-us'>
                <h1>About Us</h1>
                <p>Book Mania is an online book inventory management system. Here we have more than 25000 variety of books. You can find here books of different countries different cultures. From classical books to new books you can find every book here. It is like an encyclopedia of books.</p>
            </div>


        </div>
    );
};

export default Home;