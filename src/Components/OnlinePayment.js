import React from 'react'
import {Container, Row, Col, Form, Button, Card, CardGroup}  from 'react-bootstrap'
import "./OnlinePayment.css"
const OnlinePayment = () => {
  return (
    <Container>
        <div className='box'>
            <h3>Online Payment</h3>
            <p>Fund transfer through any Bank:</p>
            <p>Make your loan repayment via an online bank transfer from any bank, please make a transfer to either of the below accounts.</p>
            <ul>
                <li>Step 0: Log into your any Online banking account;</li>
                <li>Step 1: Select Transfer;</li>
                <li>Step 2: Select «New 3rd Party Account Transfer;</li>
                <li>Step 3: Enter the amount you want to pay;</li>
                <li>Step 4: Enter your loan agreement number (a number which was sent to you via SMS).</li>
            </ul>
            <p>Sampath Bank</p>
            <p>Account Number: 113xxxxxxx</p>
            <p>Account Name: Speedy (PVT) LTD</p>
            <p>Bank Name: Sampath Bank PLC</p>
            <p>Branch Name: Colombo</p>
        </div>
    </Container>
  )
}

export default OnlinePayment
