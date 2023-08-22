import React from 'react'
import { Container, Nav, Navbar, Button, NavItem, Link } from 'react-bootstrap'
import "./NavigationBar.css"

const NavigationBar = () => {
  return (

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className='nav-btn nav-btn-primary' to="/">Home</Nav.Link>
                <Nav.Link className='nav-btn nav-btn-primary' to="/about">About</Nav.Link>
                <Nav.Link className='nav-btn nav-btn-primary' to="/repayment">Repayment</Nav.Link>
                <Nav.Link className='nav-btn nav-btn-primary' to="/contactUs">Contact Us</Nav.Link>
                <Nav.Link className='nav-btn nav-btn-primary' to="/apply">Apply</Nav.Link>
                <Nav.Link className='nav-btn nav-btn-primary' to="/signin">Sign In</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

  )
}
export default NavigationBar

         



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


    //    <Router>
    //    {/* <Routes>
    //         <Route path="/" element={<HomePage />} />
    //         <Route path="/about" element={<AboutPage />} />
    //         <Route path="/repayment" element={<RepaymentPage />} />
    //         <Route path="/contactUs" element={<ContactUsPage />} />
    //         <Route path="/apply" element={<LoanApplicationPage />} />
    //         <Route path="/logIn" element={<LoginPage />} />
    //     </Routes>
    // </Router>  */}
