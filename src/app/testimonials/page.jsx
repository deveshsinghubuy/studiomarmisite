import React from 'react'
import Sec2testm from './components/Sec2testm'
import Sec3testm from './components/Sec3testm'
import Sec1ourteam from '../ourteam/component/Sec1ourteam'
import Sec5ourteam from '../ourteam/component/Sec5ourteam'
import Sec6ourteam from '../ourteam/component/Sec6ourteam'

const page = () => {
  return (
    <div>
        <Sec1ourteam title="TESTIMONIALS" page="Testimonials"></Sec1ourteam>
        <Sec2testm></Sec2testm>
        <Sec3testm></Sec3testm>
        <Sec5ourteam></Sec5ourteam>
        <Sec6ourteam></Sec6ourteam>
    </div>
  )
}

export default page
