import React, { useContext } from 'react'
import { ParentContext } from './ParentUseContext'

function GranUserContext() {

    const test = useContext(ParentContext);
    // console.log(name)
    // console.log(name1)
  return (
    <div>{test[0]}<br></br>{test[1]}</div>
  )
}

export default GranUserContext