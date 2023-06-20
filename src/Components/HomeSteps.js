import React from 'react'
import "./HomeSteps.css"
import { Button, Col, Container, Row } from 'react-bootstrap'

const HomeSteps = () => {
  return (
    <div className='home-steps'>
        <Container>
            <h1>3 easy Steps to Get a Loan</h1>
            <div className='home-steps-body'>
                <Row>
                    <Col>
                        <div className='home-steps-box'>
                            <p>Fill-out short online Application Form</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='home-steps-box'>
                            <p>Get Approved within 1 min</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='home-steps-box'>
                            <p>Look in to Your Bank Account</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="home-steps-btn-cover"><Button className='home-steps-btn home-intro-btn-primary'>Apply Now</Button></div>
        </Container>
    </div>
  )
}

export default HomeSteps