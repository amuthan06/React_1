import React, { useContext } from 'react'
import {ParentContext, ParentUseContext} from './ParentUseContext'

function ChildUserContext() {

    const {name,name1} = useContext(ParentContext);
    //destructring --> {name,name1}
    //. --> test.name,test.name1
    //[] --> test["name"],test["name1"]
    
  return (
    <div>
        <h1>Hi,{name}{name1}</h1>
    </div>
  )
}

export default ChildUserContext