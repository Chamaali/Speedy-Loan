import React from 'react'
import { Container, Form, FormLabel, FormText, Link, Button } from 'react-bootstrap'
import "./LoanApplication.css"

const LoanApplication = () => {
  return (
    <div className='login-form'>
        <Container>
            <div className='login-form-box'>
                <Form>

                <Form.Control className='login-form-text-box' type="text" placeholder="Full name" />
                <Form.Control className='login-form-text-box' type="text" placeholder="ID Number" />
                <Form.Control className='login-form-text-box' type="Date" placeholder="Date of Birth" />
                <Form.Control className='login-form-text-box' type="Phone" placeholder="Phone number" />
                <Form.Control className='login-form-text-box' type="email" placeholder="Email" />

                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                        type={type}
                        id={`check`}
                        label={`I have read, understand and agree to the *Terms & Conditions and *Privacy Policy`}
                    />
                    </div>
                ))}
                <div className='login-form-button-cover'>
                    <Button type="login" id="login" className='login-form-btn-primary login-form-btn'>Login</Button>
                </div>

                </Form>

            </div>
        </Container>
    </div>
  )
}

export default LoanApplication