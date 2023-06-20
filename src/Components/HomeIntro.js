import React from 'react'
import {Row, Col, Container, Button} from "react-bootstrap"
import "./HomeIntro.css"

const HomeIntro = () => {
  return (
    <div className='home-intro'>
        <Container>
            <Row>
                <Col className='home-intro-col' md={6} xs={12}>
                    <h1>Get your free first loan in 10 minutes</h1>
                    <h4>Up to Rs 60,000 for up to 180 days for repeat loans</h4>
                    <p>We offer online loans with the great convenience. SpeedyLoan will provide the amount in a few minutes free of charge. The loan is provided automatically.</p>
                    <Button className='home-intro-btn home-intro-btn-primary'>Apply for a Loan</Button>
                </Col>
                <Col md={6} xs={12}>
                    <div className='man-box'>
                        <img src="./Assests/Images/man.png" alt='man'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeIntro