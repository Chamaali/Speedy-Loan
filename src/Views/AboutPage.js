import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import AboutIntro from '../Components/AboutIntro'
import AboutBenifits from '../Components/AboutBenifits'
import Footer from '../Components/Footer'
import { Container } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <Container>
        <div id='aboutPage'>
            <NavigationBar />
            <AboutIntro />
            <AboutBenifits />
            <Footer />
        </div>
    </Container>
    
  )
}

export default AboutPage