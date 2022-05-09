import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
    const handleUpload = (event) => {
        event.preventDefault();
        toast('Yohoo!..Subscribed');
    };

    return (
        <div>
            <div className='w-50 mt-5 mx-auto'>
                <h1 className='mb-3'>Subscribe to our Newsletter?</h1>
                <form onSubmit={handleUpload}>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name='name' placeholder="Name" required />
                    </div>
                    <div className="form-group mt-3">
                        <input type="email" name='email' className="form-control" placeholder="Email Address" required />
                    </div>
                    <button type="submit" className="btn btn-secondary mt-3 w-100 mb-5">Subscribe</button>
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;