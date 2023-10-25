import React, { useState } from 'react'
import Child2 from './child2'

function Parent2() {

  const [parentData,setParentData] = useState('Parent')

  const childToParent = (e) => {
    setParentData(e)
  }

  return (
    <div>
      <h1>Parent - {parentData}</h1>
      <Child2 parentData={parentData} childToParent={childToParent}/>
    </div>
  )
}

export default Parent2