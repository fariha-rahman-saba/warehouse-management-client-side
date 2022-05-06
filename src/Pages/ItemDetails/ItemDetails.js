import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:4000/items/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div>
            This is item detail: {item.name}
        </div>
    );
};

export default ItemDetails;