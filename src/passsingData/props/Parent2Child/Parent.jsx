import React from 'react'
import Child from './Child'

function Parent() {

    const name = "parent"

  return (
    <div>
        <Child name={name}/>
    </div>
  )
}

export default Parent