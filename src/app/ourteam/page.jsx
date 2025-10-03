import React from 'react'
import Sec2 from './component/Sec2ourteam'
import Sec3ourteam from './component/Sec3ourteam'
import Sec4ourteam from './component/Sec4ourteam'
import Sec5ourteam from './component/Sec5ourteam'
import FaqClient from './component/Faq'
import Sec6ourteam from './component/Sec6ourteam'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Sec1ourteam from './component/Sec1ourteam'

const page = () => {
  return (
    <div>
        <Sec1ourteam title="Meet Our Team" page="Our Team" ></Sec1ourteam>
        <Sec2></Sec2>
        <Sec3ourteam></Sec3ourteam> 
        <Sec4ourteam></Sec4ourteam> 
        <Sec5ourteam></Sec5ourteam> 
        <Sec6ourteam/>
        {/* <FaqClient></FaqClient> */}
    </div>
  )
}

export default page
