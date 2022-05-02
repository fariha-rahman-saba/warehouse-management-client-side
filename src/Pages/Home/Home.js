import React from 'react';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg';
import SingleItem from '../SingleItem/SingleItem';
import './Home.css';

const Home = () => {
    const [items] = useItems();
    const displayItems = items.slice(3);

    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <h1 className='mt-5'>Inventory Items</h1>
            <div className='inventory-items-container'>
                {
                    displayItems.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>

        </div>
    );
};

export default Home;