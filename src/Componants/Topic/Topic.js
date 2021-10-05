import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Topic = (props) => {
    const{CourseName,CourseFee,Title,CourseDuration}=props.pd
    return (
        <Container>
        <Row>
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>CourseName: {CourseName}</Card.Title>
    <Card.Text>
    <p>CourseDuration: {CourseDuration}</p>
    <h4>CourseTitle: {Title}</h4>
    <h5>Fee: {CourseFee}</h5>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
   
  </Row>
  </Container>
    );
};

export default Topic;