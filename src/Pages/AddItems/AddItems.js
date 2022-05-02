import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleUpload = (event) => {
        event.preventDefault();

        const imgUrl = event.target.imgUrl.value;
        const productName = event.target.productName.value;
        const desc = event.target.desc.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const sold = event.target.sold.value;

        console.log(imgUrl, productName, desc, price, quantity, supplierName, sold);
    };

    return (
        <div className='container w-50 mx-auto mt-5'>
            <Form onSubmit={handleUpload}>
                <Form.Group className="mb-3" controlId="formBasicImgUrl">
                    <Form.Control type="text" name='imgUrl' placeholder="Image URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicItemName">
                    <Form.Control type="text" name='productName' placeholder="Product Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control type="text" name='desc' placeholder="Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="text" name='price' placeholder="Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="text" name='quantity' placeholder="Quantity" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSupplierName">
                    <Form.Control type="text" name='supplierName' placeholder="Supplier name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='sold' label="Sold" />
                </Form.Group>

                <Button className='secondary w-50 mx-auto d-block mb-2' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddItems;