import React from 'react'
import Sec2 from './component/sec2ourteam'
import Sec3ourteam from './component/sec3ourteam'
import Sec4ourteam from './component/sec4ourteam'
import Sec5ourteam from './component/sec5ourteam'
import FaqClient from './component/Faq'
import Sec6ourteam from './component/sec6ourteam'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Sec1ourteam from './component/sec1ourteam'

const page = () => {
  return (
    <div>
        <Nav></Nav>
        <Sec1ourteam title="Meet Our Team"></Sec1ourteam>
        <Sec2></Sec2>
        <Sec3ourteam></Sec3ourteam> 
        <Sec4ourteam></Sec4ourteam> 
        <Sec5ourteam></Sec5ourteam> 
        <Sec6ourteam/>
        <Footer></Footer>
        {/* <FaqClient></FaqClient> */}


    </div>
  )
}

export default page
