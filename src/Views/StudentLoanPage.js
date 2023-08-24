import React from 'react'
import StudentLoan from '../Components/StudentLoan'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'

const StudentLoanPage = () => {
  return (
    <div>
        <NavigationBar/>
        <StudentLoan/>
        <Footer/>
    </div>
  )
}

export default StudentLoanPage