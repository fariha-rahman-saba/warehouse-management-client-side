import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleUpload = (event) => {
        event.preventDefault();

        const image = event.target.image.value;
        const name = event.target.name.value;
        const short_desc = event.target.short_desc.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const sold = event.target.sold.value;


        // console.log(image, name, short_desc, price, quantity, supplierName, sold);

        const url = 'http://localhost:4000/add-items';
        const item = { image, name, short_desc, price, quantity, supplierName, sold };



        fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'authorization': `${user.email}`,
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
            });
    };

    return (
        <div className='container w-50 mx-auto mt-5'>
            <form onSubmit={handleUpload}>
                <div className="form-group mt-3">
                    <input type="text" name='image' className="form-control" placeholder="Image URL" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='name' placeholder="Item Name" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='short_desc' placeholder="Short description" />
                </div>
                <div className="form-group mt-3">
                    <input type="number" className="form-control" name='price' placeholder="Price" />
                </div>
                <div className="form-group mt-3">
                    <input type="number" className="form-control" name='quantity' placeholder="Quantity" />
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