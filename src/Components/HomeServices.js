import React from 'react'
import "./HomeServices.css"
import { Container, CardGroup, Card } from 'react-bootstrap'

const HomeServices = () => {
  return (
    <div className='home-services'>
        <Container>
            <div className='home-services-title'>
                <h1>Our Services</h1>
            </div>
            <CardGroup className='home-services-card-group'>
                <Card className='home-services-card'>
                    <Card.Body className='home-services-card-body'>
                        <h5>Business Loan</h5>
                        <div className='home-services-card-body-img-cover'>
                            <Card.Img variant="top" src="./Assests/Images/business_loan.png" className='home-services-card-body-img' />
                        </div>
                    </Card.Body>
                </Card>
                <Card className='home-services-card'>
                    <Card.Body className='home-services-card-body'>
                        <h5>Student Loan</h5>
                        <div className='home-services-card-body-img-cover'>
                            <Card.Img variant="top" src="./Assests/Images/business_loan.png" className='home-services-card-body-img' />
                        </div>
                    </Card.Body>
                </Card>
                <Card className='home-services-card'>
                    <Card.Body className='home-services-card-body'>
                        <h5>Personal Loan</h5>
                        <div className='home-services-card-body-img-cover'>
                            <Card.Img variant="top" src="./Assests/Images/business_loan.png" className='home-services-card-body-img' />
                        </div>
                    </Card.Body>
                </Card>
                <Card className='home-services-card'>
                    <Card.Body className='home-services-card-body'>
                        <h5>Auto Loan</h5>
                        <div className='home-services-card-body-img-cover'>
                            <Card.Img variant="top" src="./Assests/Images/business_loan.png" className='home-services-card-body-img' />
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    </div>
  )
}

export default HomeServices