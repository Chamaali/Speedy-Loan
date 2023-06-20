import React from 'react'
import "./Footer.css"
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row className='row'>
                <Col className='footer-col' md={4} xs={12}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact Us</p>
                </Col>
                <Col className="footer-col" md={4} xs={12}>
                    <p>Terms & Conditions</p>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                </Col>
                <Col className="footer-col" md={4} xs={12}>
                    <img src="./Assests/Images/twitter_logo.png" alt="" width="25vw"/>
                    <img src="./Assests/Images/fb_logo.png" alt="" width="15vw"/>
                    <img src="./Assests/Images/wtsapp_logo.png" alt=""  width="25vw"/>
                </Col>
            </Row>  
            <Row>
                <div className='Copyright'>
                    <small>Copyright © 2023 Speedy Loan</small>
                </div>
            </Row>  
        </Container>    
    </div>
  )
}

export default Footer