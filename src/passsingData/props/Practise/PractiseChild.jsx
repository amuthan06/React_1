import React, { useContext } from 'react'
import { ParentContext } from './PractiseParent'

function PractiseChild() {

  const test = useContext(ParentContext)
  return (
    <div>PractiseChild <h1>{test.id}. {test.name}</h1></div>
  )
}

export default PractiseChild