import React from 'react'
import { Container, Form, FormLabel, FormText, Link, Button } from 'react-bootstrap'
import "./SignIn.css"

const SignIn = () => {
  return (
    <Container>
        {/* <p>Email:</p>
        <Form.Control className='login-form-text-box' type="text" placeholder="Type Your Email" />
        <p>Password:</p>
        <Form.Control className='login-form-text-box' type="text" placeholder="Type Your Password" /> */}
      {/* <Form.Control className='login-form-text-box' type="checkbox">hfdhskh</Form.Control> */}
        <Form className='form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" id="email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label >Password:</Form.Label>
                <Form.Control type="Password" id='password'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Button variant="Submit" value="Sign up" type='submit' id="signUp">Sign Up</Button>       
            </Form.Group> 
           
        </Form>
        {/* <p>
            vghgjggs
        </p> */}
    </Container>
  )
}

export default SignIn
