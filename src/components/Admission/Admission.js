
import React from 'react';
import { Form, Button, variant, Col } from 'react-bootstrap';
import './Admission.css';
const Admission = () => {
    return (
        <div className="admission">
            <h1 className="title">Take a course and Start you won firm</h1>
         <div className="admission-form" >
        <Form>
            <h3> Sign up</h3>
            
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <br />
        <Form.Control className="input" type="name" placeholder="Full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <br />
        <Form.Control className="input"  type="number" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <br />
        <Form.Control className="input"  type="text" placeholder="address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <br />
        <Form.Control className="input"  type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <br />
            <Form.Control className="input"  type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Choose your course</Form.Label>
      <br />
      <Form.Select className="input"  defaultValue="Vegetable">
        <option>Cow firming</option>
        <option>Goat firming</option>
        <option>Duck firming</option>
        <option>Rabbit firming</option>
        <option>Poultry firming</option>
        <option>Fish farming</option>
        <option>Pigeon firming</option>
        <option>Crocodile farming</option>
      </Form.Select>
    </Form.Group>

        <Button className="button" variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        

        
          </div>
        </div>
    );
};

export default Admission;