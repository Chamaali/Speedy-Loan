import React from 'react'
import { Container, Form, FormLabel, FormText, Link, Button } from 'react-bootstrap'
import "./SignIn.css"

const SignIn = () => {
  return (
    <Container>
        <Form className='form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label >Password:</Form.Label>
                <Form.Control type="Password" id='password'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Button variant="Submit" value="Sign up" className='signin-button' type='submit' id="signUp">Sign Up</Button>       
            </Form.Group> 
        </Form>
    </Container>
  )
}

export default SignIn
