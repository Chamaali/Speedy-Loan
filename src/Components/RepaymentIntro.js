import React from 'react'
import { Container } from 'react-bootstrap'
import "./RepaymentIntro.css"

const RepaymentIntro = () => {
  return (
    <div className='repayment-intro'>
        <Container>
            <div className='repayment-intro-title'>
                <h1>How to repay a loan?</h1>
            </div>
            <div className='repayment-intro-para'>
                <p>Choose the most convenient method from offered below. Follow the steps of our simple instruction.</p>
            </div>
        </Container>

    </div>
  )
}

export default RepaymentIntro