import React from 'react'
import SignIn from '../Components/SignIn'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'

const SignInPage = () => {
  return (
    <div id='signInPage'>
        <NavigationBar/>
        <SignIn/>
        <Footer/>
    </div>
  )
}

export default SignInPage