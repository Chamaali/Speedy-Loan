import React from 'react'
import AutoLoan from '../Components/AutoLoan'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'

const AutoLoanPage = () => {
  return (
    <div>
        <NavigationBar/>
        <AutoLoan />
        <Footer/>
    </div>
  )
}

export default AutoLoanPage