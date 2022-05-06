import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleUpload = (event) => {
        event.preventDefault();

        const imgUrl = event.target.imgUrl.value;
        const itemName = event.target.itemName.value;
        const desc = event.target.desc.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const sold = event.target.sold.value;


        console.log(imgUrl, itemName, desc, price, quantity, supplierName, sold);

        const url = 'http://localhost:4000/add-items';
        const item = { imgUrl, itemName, desc, price, quantity, supplierName, sold };
        // event.target.reset();


        fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'authorization': `${user.email}`,
                'Content-type': 'application/json',

            },
        }).then(res => res.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className='container w-50 mx-auto mt-5'>
            <form onSubmit={handleUpload}>
                <div className="form-group mt-3">
                    <input type="text" name='imgUrl' className="form-control" placeholder="Image URL" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='itemName' placeholder="Item Name" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='desc' placeholder="Short Description" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='price' placeholder="Price" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='quantity' placeholder="Quantity" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='supplierName' placeholder="Supplier Name" />
                </div>


                <div className="form-check mt-3 d-flex ">
                    <input type="checkbox" className="form-check-input " id="exampleCheck1" name='sold' />
                    <label className="form-check-label  " for="exampleCheck1">Sold</label>
                </div>
                <button type="submit" className="btn btn-secondary mt-3 w-100">Add Item</button>
            </form>
        </div>
    );
};

export default AddItems;