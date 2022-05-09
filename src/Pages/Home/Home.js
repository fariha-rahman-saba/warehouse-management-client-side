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
        <div className='home-container'>
            <img className='img-fluid' src={banner} alt="" />
            <h1 className='mt-5'>Inventory Items</h1>
            <div className='home-inventory-items-container'>
                {
                    displayItems.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>

            <Button variant="warning" className='mb-5 w-25' onClick={() => goToManageInventory()}>Manage Inventory</Button>

            <div className='choose-us w-50 mx-auto'>
                <h1>Why you should choose us?</h1>
                <p>Book Mania is an online book inventory management system. Here we have more than 25000 variety of books. You can find here books of different countries different cultures. From classical books to new books you can find every book here. It is like an encyclopedia of books. Get the best service in Bangladesh at a very low expence and great reliability.</p>
            </div>

            <div className='about-bookmania w-50 mx-auto mb-5 mt-3'>
                <h1>About Book Mania</h1>
                <p>Book Mania is established id 2015. In the very short span of time Book Mania has achieved huge milestones. We are the no. 1 book inventory management system in Bangladesh. At a time we can stock more than 500,000 book in out inventory.</p>
            </div>


        </div>
    );
};

export default Home;