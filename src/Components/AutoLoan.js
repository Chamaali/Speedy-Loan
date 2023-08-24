import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import "./BusinessLoan.css"

const AutoLoan = () => {
  return (
    <Container>
        <Row className='heading'>
            <h1 className='hd1'>Auto Loan</h1>
        </Row>
        <Row className='para'>
            <h5 className='hd5'>FIND THE BEST LOAN SOLUTIONS</h5>
            <p className='pa'>If you can give the any valuable asset as a security purpose, We can arrange the flexible funding solutions for your business in order to meet your working capital requirements, purchase of machinery or business expansion projects.</p>
            <p className='pa'>Talk to us and we guarantee to contact you within few minute to give you the best solutions through our network of sri lanka leading financial institutions (Bank or Finance companay) , one of our representatives will be at your door step at your convenience.</p>
       </Row>
        {/* <Row className='padding-box'>
            <div>
                <h5 className='hd5in'>Choose a loan that is right for you</h5>
            </div>
            <Row>
                <Col md="4"  className='col'>
                    <Card className='crd'>
                        <div>
                            <h4 className='hd4'>up to Rs 10,000</h4>
                        </div>
                        <div>
                            <p>Get a loan absolutely for free 0% interest guarantee</p>
                        </div>
                    </Card>
                </Col>
                <Col md="4"   className='col'>
                    <Card className='crd'>
                        <div>
                            <h4 className='hd4'>up to Rs 20,000</h4>
                        </div>
                        <div>
                            <p>Pay back your loan on time and borrow up to Rs 20,000 Bigger loans for repeat customers</p>
                        </div>
                    </Card>
                </Col>
                <Col md="4"   className='col'>
                    <Card className='crd'>
                        <div>
                            <h4 className='hd4'>up to Rs 50,000</h4>
                        </div>
                        <div>
                            <p>Get even more money, repay in several easy monthly payments</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Row> */}
        <Row>
            <h5></h5>
            <p></p>
        </Row>
        
    </Container>
  )
}

export default AutoLoan