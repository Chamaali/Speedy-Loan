import React from 'react'
import {Container, Row, Col, Form, Button, Card, CardGroup}  from 'react-bootstrap'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div>
        <div>
            <Container>
                <h1>Contact Us</h1>
                <CardGroup>
                    <Card className='contact-card'>
                    <p>
                    <Card.Img  style={{ width: "50px" }} src="./Assests/Images/phone.png" alt='phone'/>
                    </p>
                    <Card.Body>
                        <p className='text'>+94 11 2566390</p>
                    </Card.Body>
                    
                        
                    </Card>
                    <Card className='contact-card'>
                    <p>
                    <Card.Img  style={{ width: "50px", alignContent:"center" }} src="./Assests/Images/mail.png" alt='mail'/>
                    </p>
                    <p className='text'>support@speedyloan@gmail.com</p>
                    
                        
                    </Card>
                    <Card className='contact-card'>
                    <p>
                    <Card.Img className='image'  style={{ width: "50px" }} src="./Assests/Images/location.png" alt='location'/>
                    </p>
                    <p className='text'>No 234/A,</p>
                    <p className='text'>Hospital Rd,</p>
                    <p className='text'>Maharagama</p>
                        
                    </Card>
                </CardGroup>
                
                <Row  className='body'>
                    <div>
                        <Col ><img  style={{ width: "200px" }} src="./Assests/Images/women.png" alt='women'/></Col>
                        <Col>
                            <h5 className='text2'>Leave a Comment / Ask a Question</h5>
                        </Col>
                    </div> 
                    <Form.Group  className='comment'>
                        <Form.Control as="textarea" rows={5}  style={{ width: "600px" }} placeholder='Comment here..'/>
                    </Form.Group> 
                </Row> 
                
            </Container>
        </div>
        <div>
            <Container>

            </Container>
        </div>
    </div>
  )
}

export default ContactUs