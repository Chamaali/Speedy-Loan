import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg" >
        <Container>
        <Navbar.Brand href="#home">
            <img src='./Assests/Images/logo.png' width="50%" alt="logo"/>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='items-box'  style={{alignItems:"end"}}>
                    <Nav className="me-auto">
                        <Button className='nav-btn nav-btn-primary' href="#"  style={{}}>Home</Button>
                        <Button className='nav-btn nav-btn-primary' href="#">About</Button>
                        <Button className='nav-btn nav-btn-primary' href="#">Repayment</Button>
                        <Button className='nav-btn nav-btn-primary' href="#">Contact Us</Button>
                        <Button className='nav-btn nav-btn-primary' href="#">Login</Button>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar