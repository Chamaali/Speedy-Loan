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
                <Form.Control className='login-form-text-box' type="text" placeholder="Monthly Salary(Rs.)" />
                <Form.Select aria-label="Default select example" className='login-form-text-box' >
                    <option>Select the Loan Type</option>
                    <option value="1">Business Loan</option>
                    <option value="2">Student Loan</option>
                    <option value="3">Personal Loan</option>
                    <option value="4">Auto Loan</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" className='login-form-text-box' >
                    <option>Select Your Bank</option>
                    <option value="1">Peoples'Bank</option>
                    <option value="2">Bank of Ceylon</option>
                    <option value="3">National savings Bank</option>
                    <option value="4">Sampath Bank</option>
                </Form.Select>
                <Form.Control className='login-form-text-box' type="text" placeholder="Account Number" />


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