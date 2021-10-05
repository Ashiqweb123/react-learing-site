import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './Error.css'
const Error = () => {
    return (
        <div>
            <Menu></Menu>
        <div className="error-container">
            <h1>404</h1>
            <h2>No page found</h2>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Error;