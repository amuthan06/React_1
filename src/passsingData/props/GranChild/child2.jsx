import React, { useState } from 'react'
import Granchild from './Granchild'
function Child2(props) {

  const dataFromParent = props.parentData

  const [childData,setChildData] = useState(dataFromParent)

  const granToChild = (dataFromGran) => {
    setChildData(dataFromGran)
  }
  props.childToParent(childData)

  return (
    <div>
      <h1>Child - {childData} </h1>
      <Granchild dataFromChild={childData} granToChild={granToChild}/>
    </div>
  )
}

export default Child2