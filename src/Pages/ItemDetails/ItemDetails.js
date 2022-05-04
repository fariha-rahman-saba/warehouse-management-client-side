import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <div>
            This is item detail {itemId}
        </div>
    );
};

export default ItemDetails;