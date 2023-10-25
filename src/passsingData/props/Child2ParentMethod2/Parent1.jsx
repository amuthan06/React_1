import React, { useState } from 'react'
import Child1 from './Child1'

function Parent1() {

    const [data,setData] = useState("")

    const getData = (e) => {
        console.log(e+'log in parent')
        setData(e)
    }
  return (
    <div>
        <Child1 getData={getData}/>
        <h1>{data}</h1>
    </div>
  )
}

export default Parent1