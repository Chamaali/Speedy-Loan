import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import RepaymentIntro from '../Components/RepaymentIntro'
import RepaymentMethods from '../Components/RepaymentMethods'

const RepaymentPage = () => {
  return (
    <div id='repaymentPage'>
        <NavigationBar />
        <RepaymentIntro />
        <RepaymentMethods />
        <Footer />
    </div>
  )
}

export default RepaymentPage