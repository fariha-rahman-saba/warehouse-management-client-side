import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
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
        const email = user.email;


        // console.log(image, name, short_desc, price, quantity, supplierName, sold);

        const url = 'http://localhost:4000/add-items';
        const item = { email, image, name, short_desc, price, quantity, supplierName, sold };



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
                    <input type="number" className="form-control" name='quantity' placeholder="Quantity" required />
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='supplierName' placeholder="Supplier Name" />
                </div>


                <div className="form-check mt-3 d-flex ">
                    <input type="checkbox" className="form-check-input " id="exampleCheck1" name='sold' />
                    <label className="form-check-label  " for="exampleCheck1">Sold</label>
                </div>
                <button type="submit" className="btn btn-secondary mt-3 w-100 mb-5">Add Item</button>
                <ToastContainer></ToastContainer>
                {/* onClick={toast('Email sent')} */}
            </form>
        </div>
    );
};

export default AddItems;