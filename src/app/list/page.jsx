import React from 'react'
import Sec2list from './components/sec2list'
import Sec1ourteam from '../ourteam/component/sec1ourteam'

const page = () => {
  return (
    <div>
        <Sec1ourteam title="LIST" page="List"></Sec1ourteam>
        <Sec2list></Sec2list>
    </div>
  )
}

export default page
