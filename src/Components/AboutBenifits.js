import React from 'react'
import "./AboutBenifits.css"
import { Container, Row, Col } from 'react-bootstrap'

const AboutBenifits = () => {
  return (
    <div className='about-benifits'>
        <Container>
            <div className='about-benifits-title'>
                <h1>Our benefits</h1>
            </div>
            <div className='about-benifits-body'>
                <div className='about-benifits-box'>
                    <Row className='about-benifits-box-body'>
                        <Col md={6} xs={12} className='about-benifits-box-body-text'>
                            <h4>Flexible terms and loan amounts</h4>
                            <p>Once you’ve borrowed from us, choose the amount you want to borrow and flexible repayment terms for your future loans</p>
                        </Col>
                        
                        <Col md={6} xs={12} className='about-benifits-box-body-image'>
                            <img src='./Assests/Images/clock.png' alt='' />
                        </Col> 
                    </Row>
                </div>
                <div className='about-benifits-box'>
                    <Row className='about-benifits-box-body'>
                        <Col md={6} xs={12} className='about-benifits-box-body-text'>
                            <h4>Serving the whole of Sri Lanka</h4>
                            <p>Our service is 100% online, apply from any location in Sri Lanka</p>
                        </Col>
                        <Col md={6} xs={12} className='about-benifits-box-body-image'>
                            <img src='./Assests/Images/balance.png' alt='' />
                        </Col> 
                    </Row>
                    
                </div>
                <div className='about-benifits-box'>
                    <Row className='about-benifits-box-body'>
                        <Col md={6} xs={12} className='about-benifits-box-body-text'>
                            <h4>Fast & Easy application process</h4>
                            <p>Register and complete the loan application form from the comfort of your own home or office, in minutes</p>
                        </Col>
                        <Col md={6} xs={12} className='about-benifits-box-body-image'>
                            <img src='./Assests/Images/stopwatch.png' alt='' />
                        </Col>                     
                    </Row>
                </div>
                <div className='about-benifits-box'>
                    <Row className='about-benifits-box-body'>
                        <Col md={6} xs={12} className='about-benifits-box-body-text'>
                            <h4>Access your money 24/7</h4>
                            <p>Apply for a loan and get the money in minutes day and night, weekday or weekend</p>
                        </Col>  
                        <Col md={6} xs={12} className='about-benifits-box-body-image'>
                            <img src='./Assests/Images/money.png' alt='' />
                        </Col>                   
                    </Row>
                </div>
            </div>
        </Container>
        
    </div>
  )
}

export default AboutBenifits