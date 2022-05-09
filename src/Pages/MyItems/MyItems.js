import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleManageInventoryItem from '../SingleManageInventoryItem/SingleManageInventoryItem';
import './MyItems.css';


const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const emailId = user.email;
    const url = `https://mighty-beach-81550.herokuapp.com/user-items?email=${emailId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, []);

    return (
        <div className='my-items-container mt-5 mb-5'>
            {
                myItems.map(item => <SingleManageInventoryItem key={item._id} item={item}></SingleManageInventoryItem>)
            }

        </div>
    );
};

export default MyItems;