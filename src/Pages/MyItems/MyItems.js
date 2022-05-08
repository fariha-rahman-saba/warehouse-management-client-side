import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../hooks/useItems';
import SingleItem from '../SingleItem/SingleItem';

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
        <div className='my-items-container'>
            {
                myItems.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
            }
        </div>
    );
};

export default MyItems;