import React from 'react'
import LoginForm from '../Components/LoanApplication'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'


const LoginPage = () => {
  return (
    <div id="logInPage">
        <NavigationBar />
        <LoginForm />
        <Footer />
    </div>
  )
}

export default LoginPage