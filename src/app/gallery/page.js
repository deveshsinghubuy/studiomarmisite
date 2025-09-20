import React from 'react'
import Sec2gallery from './components/sec2gallery'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Sec1ourteam from '../ourteam/component/sec1ourteam'
const page = () => {
  return (
    <div>
        <Nav></Nav>
        <Sec1ourteam title="Our Gallery"></Sec1ourteam>
        <Sec2gallery></Sec2gallery>
        <Footer></Footer>
    </div>
  )
}

export default page
