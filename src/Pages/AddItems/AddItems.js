import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddItems = () => {
    const [sold, setSold] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const handleUpload = (event) => {
        event.preventDefault();

        const image = event.target.image.value;
        const name = event.target.name.value;
        const short_desc = event.target.short_desc.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const soldInfo = sold;
        const email = user.email;


        // console.log(image, name, short_desc, price, quantity, supplierName, sold);

        const url = 'https://mighty-beach-81550.herokuapp.com/add-items';
        const item = { email, image, name, short_desc, price, quantity, supplierName, sold: soldInfo };



        fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                // 'authorization': `${user.email}`,
                'Content-type': 'application/json; charset=UTF-8',

            },
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
                toast('Item Added');
            });
    };

    return (
        <div className='w-50 mt-5 mx-auto'>
            <form onSubmit={handleUpload}>
                <div className="form-group mt-3">
                    <input type="text" name='image' className="form-control" placeholder="Image URL" required />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='name' placeholder="Item Name" required />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='short_desc' placeholder="Short description" required />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='price' placeholder="Price" required />
                </div>
                <div className="form-group mt-3">
                    <input type="number" className="form-control" name='quantity' placeholder="Quantity" required />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='supplierName' placeholder="Supplier Name" required />
                </div>


                <div className="form-check mt-3 d-flex ">
                    <input className='mt-2 me-2' onClick={() => setSold(!sold)} type="checkbox" name="sold" />
                    <div>Sold</div>
                </div>
                <button type="submit" className="btn btn-secondary mt-3 w-100 mb-5">Add Item</button>
                <ToastContainer></ToastContainer>

            </form>
        </div>
    );
};

export default AddItems;