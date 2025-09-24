import React from 'react'
import Sec3rdservice from './components/sec3rdservice'
import Sec1ourteam from '../ourteam/component/sec1ourteam'

const page = () => {
  return (
    <div>
        <Sec1ourteam title="Services" page="Services"></Sec1ourteam>
        <Sec3rdservice></Sec3rdservice>
    </div>
  )
}

export default page
