import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faNetworkWired, faHome } from '@fortawesome/free-solid-svg-icons';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contacts">
            <div>
            
         <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          
            <Form.Control className="inputs" plaintext readOnly placeholder="Email"  />
          
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
           
           
            <Form.Control className="inputs" type="password" placeholder="Password" />
        </Form.Group>
        </Form>
            <FloatingLabel className="inputs text" controlId="floatingTextarea2" >
                <Form.Control
              placeholder="write shomething"
                
               
                />
            </FloatingLabel>

            </div>
            <div className="addresses">
               <h3><FontAwesomeIcon icon={faMailBulk} />  E-mail: kishok-bari@gmail.com</h3>
                 <h3> <FontAwesomeIcon icon={faPhone} />   phone : 01245789654</h3>
                <h3> <FontAwesomeIcon icon={faNetworkWired} />      Website : www.kishokbari.com</h3>
                <h3> <FontAwesomeIcon icon={faHome} />  Office : #36/GH, Road #3, kadom toli, Komilla.</h3>
            </div>
        </div>
    );
};

export default Contact;