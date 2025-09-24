import React from 'react'
import Sec2testm from './components/sec2testm'
import Sec3testm from './components/sec3testm'
import Sec1ourteam from '../ourteam/component/sec1ourteam'
import Sec5ourteam from '../ourteam/component/sec5ourteam'
import Sec6ourteam from '../ourteam/component/sec6ourteam'

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
