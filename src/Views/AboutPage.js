import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import AboutIntro from '../Components/AboutIntro'
import AboutBenifits from '../Components/AboutBenifits'
import Footer from '../Components/Footer'

const AboutPage = () => {
  return (
    <div>
        <NavigationBar />
        <AboutIntro />
        <AboutBenifits />
        <Footer />
    </div>
  )
}

export default AboutPage