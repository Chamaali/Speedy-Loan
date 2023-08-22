import React from 'react'
import LoanApplication from '../Components/LoanApplication'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'


const LoanApplicationPage = () => {
  return (
    <div id="logInPage">
        <NavigationBar />
        <LoanApplication />
        <Footer />
    </div>
  )
}

export default LoanApplicationPage