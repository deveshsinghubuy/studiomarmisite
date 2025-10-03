import React from 'react'
import Sec2blog from './components/Sec2blog'
import Sec1ourteam from '../ourteam/component/Sec1ourteam'

const page = () => {
  return (
    <div>
        <Sec1ourteam title="BLOG" page="Blog"></Sec1ourteam>
        <Sec2blog ></Sec2blog>
    </div>
  )
}

export default page
