import React from 'react'
import { Container } from 'react-bootstrap'
import "./RepaymentMethods.css"

const RepaymentMethods = () => {
  return (
    <div className='repayment-methods'>
        <Container>
            <div className='repayment-methods-box'>
                <div className='repayment-methods-box-title'>
                    <h1>Choose a payment method:</h1>
                </div>
                <div className='repayment-methods-box-items'>
                    <div className='repayment-methods-box-items-box'>
                        <div className='repayment-methods-box-items-box-image'>
                            <img src='./Assests/Images/online_payment.png' alt='online_payment' />
                        </div>
                        <div className='repayment-methods-box-items-box-text'>
                            <h4>Online payment</h4>
                            <p>Via online banking account</p>
                        </div>
                    </div>
                    <div className='repayment-methods-box-items-box'>
                        <div className='repayment-methods-box-items-box-image'>
                            <img src='./Assests/Images/offline_payment.png' alt='offline_payment' />
                        </div>
                        <div className='repayment-methods-box-items-box-text'>
                            <h4>Offline payment</h4>
                            <p>Via bank branches</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>

    </div>
  )
}

export default RepaymentMethods