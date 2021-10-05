import React from 'react';
import { ButtonGroup,Button, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import'./Contact.css'
const Contact = () => {
    return (
        <div>
            <Menu></Menu>
           
        <div className="contact-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
<Button variant="info">Submit</Button>

                    </div>
                    
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Contact;