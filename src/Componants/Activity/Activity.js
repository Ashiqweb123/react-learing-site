import React from 'react';
import { Card } from 'react-bootstrap';

const Activity = (props) => {
    const{CourseName,CourseFee}=props.service
    return (
        <div className='row'>
           
            
               <div className="col-md-12">
               <Card>
                <Card.Body>
                    <Card.Title> CourseName: {CourseName}</Card.Title>
                    <Card.Text> CourseFee:
                    {CourseFee}
                    </Card.Text>

                </Card.Body>
                </Card>
               </div>
           
            
            
 
           
            
        </div>
    );
};

export default Activity;