import React, { createContext } from 'react'
import ChildUserContext from './ChildUserContext';
import GranUserContext from './GranUserContext';

export const ParentContext = createContext(null); 

function ParentUseContext() {

    const name = "India";
    const name1= "srilanka"
  return (
    <div>
        <ParentContext.Provider value={[name,name1]}>
           <ChildUserContext/>
           <GranUserContext/>
        </ParentContext.Provider>
    </div>
  )
}

export default ParentUseContext