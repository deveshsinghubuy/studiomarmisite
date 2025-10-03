import React from 'react'
import Sec2contact from './component/Sec2Contact'
import Sec1ourteam from '../ourteam/component/Sec1ourteam'

const page = () => {
  return (
    <div>
      <Sec1ourteam title="Contact" page="Contact"></Sec1ourteam>
      <Sec2contact></Sec2contact>
    </div>
  )
}

export default page
