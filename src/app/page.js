import React from 'react'
import Sec5th from './components/sec5th'
import Sec4th from './components/sec4th'
import Sec2nd from './components/sec2nd'
import Sec3rd from './components/sec3rd'
import Nav from './components/nav'
import Sec1st from './components/sec1st'
import Footer from './components/footer'

const page = () => {
  return (
    <div>
      <Nav></Nav>
      <Sec1st></Sec1st>
      
      <Sec2nd></Sec2nd>
      <Sec3rd></Sec3rd>

      <Sec4th></Sec4th>
      <Sec5th></Sec5th>
      <Footer></Footer>
      
    </div>
  )
}

export default page
