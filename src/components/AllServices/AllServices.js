import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './AllServices.css';

const AllServices = (props) => {
    const {courseName, courseFee, slogan,imgUrl, description}=props.allServices;
    return (
     
     <Card style={{textAlign:"center"}} >
       <Card.Body>
       <Card.Img className="img" variant="center" src={imgUrl} />
       <Card.Title> <h3> Course Name: {courseName}</h3></Card.Title>
       <Card.Title> <h2> Course Fee: ${courseFee}</h2></Card.Title>
       <Card.Text>
         <h2>{slogan}</h2>
         <p>   {description}</p>
       
        </Card.Text>
         <Button className="courseBtn" variant="primary" bg="primary">Read more</Button>
       </Card.Body>
       </Card>
      
    );
};

export default AllServices;