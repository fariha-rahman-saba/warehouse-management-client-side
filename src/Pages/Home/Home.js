import React from 'react';
import banner from '../../images/banner.jpg';

const Home = () => {
    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <div className='inventory-items-container'>
                <h1>Inventory Items</h1>

            </div>
        </div>
    );
};

export default Home;