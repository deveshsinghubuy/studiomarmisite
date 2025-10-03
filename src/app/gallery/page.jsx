import React from 'react'
import Sec2gallery from './components/Sec2gallery'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Sec1ourteam from '../ourteam/component/Sec1ourteam'
const page = () => {
  return (
    <div>
        <Sec1ourteam title="Our Gallery" page="Our Gallery"></Sec1ourteam>
        <Sec2gallery></Sec2gallery>
    </div>
  )
}

export default page
