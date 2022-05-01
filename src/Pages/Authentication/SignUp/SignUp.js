import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    // Create user and update profile
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    // Navigation
    const navigate = useNavigate();


    if (loading || updating) {
        return <Loading></Loading>;
    }

    // signup
    const handleSignup = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/');
    };


    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-center mb-5'>Signup</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="secondary w-50 mx-auto d-block mb-2" type="submit">
                    Signup
                </Button>
            </Form>
            {/* <div className='text-center'>
                {errorElement}
            </div> */}
            <div className='text-center mt-2'>
                <p>Already have an account? <Link to="/login" className=' pe-auto text-decoration-none text-secondary' >Login</Link> </p>

            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default SignUp;