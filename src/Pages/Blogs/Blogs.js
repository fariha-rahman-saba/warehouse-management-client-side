import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs mx-auto mt-5 mb-5'>
            <h3>Q1: Difference between javascript and nodejs.</h3>
            <p>Ans: JavaScript is a simple programming language that runs in any browser as all browser has JavaScript Engine. It is basically one standard defining programming language. It normally used for a web application on any verification or any specific business logic. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses. It requires libraries that can easily be accessed from JavaScript programming for better use. V8 is the JavaScript engine inside of node.js that parses and runs JavaScript.</p>
            <br />

            <h3>Q2: Differences between sql and nosql databases.</h3>
            <p>Ans: SQL databases are vertically scalable. These databases have fixed or static or predefined schema. The full form of SQL is Structured Query Language. SQL databases are table-based. These databases are better for multi-row transactions. Some SQL databases are: MySQL, PostGres, SQLite etc.
                NoSQL databases are horizontally scalable. Full form of NoSQL is not only SQL. NoSQL databases are document, key-value, graph, or wide-column stores. These databases are better for unstructured data like documents or JSON. Examples of NoSQL databases are: MongoDB, Cassandra, Amazon DynamoDB etc.
                <br />
            </p>
            <h3>Q3: What is the purpose of jwt and how does it work?</h3>
            <p>Ans: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, with a set of claims. JWTs are signed using a cryptographic algorithm to guarantee that the claims cannot be altered after the token is issued. JWTs vary from other web tokens in that they contain a set of claims. Claims are used to transmit information among two parties. A JWT is a string made up of three parts, parted by dots, and serialized using base64.</p>

        </div>
    );
};

export default Blogs;