import React, { createContext } from 'react'
import PractiseChild from './PractiseChild'

export const ParentContext = createContext()

function PractiseParent() {

  const name="India"
  const id = 1
  return (
    <ParentContext.Provider value={{id,name}}>
      <PractiseChild/>
    </ParentContext.Provider>
  )
}

export default PractiseParent