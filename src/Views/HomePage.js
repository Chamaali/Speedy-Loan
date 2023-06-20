import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import HomeIntro from '../Components/HomeIntro'
import HomeServices from '../Components/HomeServices'
import HomeSteps from '../Components/HomeSteps'
import HomeEligible from '../Components/HomeEligible'

const HomePage = () => {
  return (
    <div>
        <NavigationBar />
        <HomeIntro />
        <HomeServices />
        <HomeSteps />
        <HomeEligible />
        <Footer />

    </div>
  )
}

export default HomePage