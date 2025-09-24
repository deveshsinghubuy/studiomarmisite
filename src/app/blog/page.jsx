import React from 'react'
import Sec2blog from './components/sec2blog'
import Sec1ourteam from '../ourteam/component/sec1ourteam'

const page = () => {
  return (
    <div>
        <Sec1ourteam title="BLOG" page="Blog"></Sec1ourteam>
        <Sec2blog></Sec2blog>
    </div>
  )
}

export default page
