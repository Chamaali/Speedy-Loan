import React from 'react'
import "./Configuration.css"
import {Container, Row, Col, Form, Button}  from 'react-bootstrap'
// import { Button } from 'bootstrap'

const Configuration = () => {
  return (
    
    <Container>
        <h3>Email Conformation</h3>
        <div className='box'>
        <p>Enter OTP code from Email</p>
        <Form>
            <Form.Control type='text' id="otp"/>
        </Form>
        <p><a href='#'>Resend Email</a></p>
        <Button variant="Submit" value="Confirm" className='confirm-button' type='submit' id="Confirm">Confirm</Button>
        </div>
    </Container>
  )
}

export default Configuration