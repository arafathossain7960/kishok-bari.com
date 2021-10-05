
import React from 'react';
import { Card, Button, Col, Container, Row} from 'react-bootstrap';
import './Course.css';
import img from '../../../src/img/duck.png';
const Course = (props) => {
    const {courseName, courseFee, slogan,imgUrl, description}=props.course;
     const defenation =description.slice(0, 100)
   
    return (
     <div className="home-card">
           
         <Card style={{textAlign:"center"}} >
       
        <Card.Body>
        <Card.Img className="img" variant="center" src={imgUrl} />
        <Card.Title> <h2> Course Name: {courseName}</h2></Card.Title>
        
        <Card.Title> <h2> Course Fee: ${courseFee}</h2></Card.Title>
        <Card.Text>
          <p>  {defenation}</p>
         
         </Card.Text>
          <Button className=" home-button" variant="primary" >Read more</Button>
        </Card.Body>
        </Card>
        </div>
    
    );
};

export default Course;