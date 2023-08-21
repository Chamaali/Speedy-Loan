import React from 'react'
import { Container, Nav, Navbar, Button, NavItem } from 'react-bootstrap'
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <div>
        {/* <Navbar bg="light" expand="lg" >
        <Container>
        <Navbar.Brand href="#home">
            <img src='./Assests/Images/logo.png' width="50%" alt="logo"/>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='items-box'  style={{alignItems:"end"}}>
                    <Nav className="me-auto">
                        <Nav.Link className='nav-btn nav-btn-primary' href="#homePage"  style={{}}>Home</Nav.Link>
                        <Nav.Link className='nav-btn nav-btn-primary' href="#aboutPage">About</Nav.Link>
                        <Nav.Link className='nav-btn nav-btn-primary' href="#repaymentPage">Repayment</Nav.Link>
                        <Nav.Link className='nav-btn nav-btn-primary' href="#contactUsPage">Contact Us</Nav.Link>
                        <Nav.Link className='nav-btn nav-btn-primary' href="#signInPage">Sign In</Nav.Link>
                        <Nav.Link className='nav-btn nav-btn-primary' href="#logInPage">Log In</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar> */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-btn nav-btn-primary' href="#homePage">Home</Nav.Link>
            <Nav.Link className='nav-btn nav-btn-primary' href="#aboutPage">About</Nav.Link>
            <Nav.Link className='nav-btn nav-btn-primary' href="#repaymentPage">Repayment</Nav.Link>
            <Nav.Link className='nav-btn nav-btn-primary' href="#contactUsPage">Contact Us</Nav.Link>
            <Nav.Link className='nav-btn nav-btn-primary' href="#signInPage">Sign In</Nav.Link>
            <Nav.Link className='nav-btn nav-btn-primary' href="#logInPage">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar