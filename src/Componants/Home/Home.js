import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Learning is a result of listening, which in turn leads to even better listening and attentiveness to the other person. In other words, to learn from the child, we must have empathy, and empathy grows as we learn.</h1>
                        </div>
                        <div className="col-md-6">
                            <h2>Azim's blog</h2>
                        </div>
                    </div>
                </div>
            </div>
       <Footer></Footer>
       </div>
    );
        
};

export default Home;
