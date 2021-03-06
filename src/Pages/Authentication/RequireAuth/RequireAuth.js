import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    let location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email is not verified!</h3>
            <h5 className='text-secondary'> Please Verify your email address</h5>
            <button
                className='btn btn-secondary mt-3 mb-5'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Email sent');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>;
    }

    return children;

};

export default RequireAuth;