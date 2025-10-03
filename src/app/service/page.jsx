import React from 'react'
import Sec3rdservice from './components/Sec3rdservice'
import Sec1ourteam from '../ourteam/component/Sec1ourteam'
import Sec3ourteam from '../ourteam/component/Sec3ourteam'
import Sec5ourteam from '../ourteam/component/Sec5ourteam'
import Sec6ourteam from '../ourteam/component/Sec6ourteam'

const page = () => {
  return (
    <div>
        <Sec1ourteam title="Discover Our Range of Premium Flooring Solutions" page="Services"></Sec1ourteam>
        <Sec3ourteam></Sec3ourteam>
        <Sec3rdservice></Sec3rdservice>
        <Sec5ourteam></Sec5ourteam>
        <Sec6ourteam></Sec6ourteam>
    </div>
  )
}

export default page
