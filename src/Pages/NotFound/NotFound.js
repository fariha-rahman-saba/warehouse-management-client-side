import React from 'react';

const NotFound = () => {
    const img = `https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`;
    return (
        <div>
            <h1 className='m-5'>Sorry! Page not found</h1>
            <img className='w-100' src={img} alt="" height="500px" />
        </div>
    );
};

export default NotFound;;