import React from 'react'
import Sec5th from './components/Sec5th'
import Sec4th from './components/Sec4th'
import Sec2nd from './components/Sec2nd'
import Sec3rd from './components/Sec3rd'
import Nav from './components/Nav'
import Sec1st from './components/Sec1st'
import Footer from './components/Footer'
import Demo from './components/Demo'

const page = () => {
  return (
    <div>

      {/* <Demo></Demo> */}
      <Sec1st></Sec1st>
      <Sec2nd ></Sec2nd>
      <Sec5th></Sec5th>

      <Sec3rd></Sec3rd>

      <Sec4th></Sec4th>
    </div>
  )
}

export default page
