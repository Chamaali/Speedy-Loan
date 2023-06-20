import React from 'react'
import "./HomeEligible.css"
import { Container } from 'react-bootstrap'

const HomeEligible = () => {
  return (
    <div className='home-eligible'>
        <Container>
            <div className="home-eligible-title">
                <h1>Am I eligible for A loan?</h1>
            </div>
            <ul className='home-eligible-list'>
                
                <li>
                    <div className="home-eligible-box">
                        <p>21 - 65 years old</p>
                    </div>
                </li>
                <li>
                    <div className="home-eligible-box">
                        <p>You are employed</p>
                    </div>
                </li>
                <li>
                    <div className="home-eligible-box">
                        <p>Sri Lankan Residents</p>
                    </div>  
                </li>
            </ul>
            
            
            
            
        </Container>
    </div>
  )
}

export default HomeEligible