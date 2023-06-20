import React from 'react'
import "./AboutIntro.css"
import { Container } from 'react-bootstrap'

const AboutIntro = () => {
  return (
    <div className='about-intro'>
        <Container>
            <div className="about-intro-title">
                <h1>Who We Are & What We Do</h1>
            </div>
            <div className="about-intro-body">
                <p>We provide online cash loans without any hassle. With SpeedyLoan the future is here - our approval process is fully automated and artificial intelligence-driven. Fill out application form on the website in 5 minutes and get money into your bank account instantly. No collateral or office visit is required.</p>
                <p>More than 100 000 clients have used SpeedyLoan solution to fill their financial needs. We take great care about your personal data and work with the most trusted banks and partners in Sri Lanka to deliver our services.</p>
                <p>Build your good history with SpeedyLoan, pay back on time and enjoy bigger and better loan terms from the most advanced provider in the market.</p>
            </div>
        </Container>
    </div>
  )
}

export default AboutIntro