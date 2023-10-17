import React, { useState } from 'react'

function Props(props) {

  let newName = props.name

  const [newname,setNewName] = useState(newName);

  const handleChange = () =>{
    setNewName('Australia')
    console.log(newname)
  }

  console.log (newName)
   
    
  return (
    <div>
        <h1>{newname}</h1>
        <div>
        <button onClick={()=>handleChange()}>Change</button>
        
      </div>
    </div>
  )
}

export default Props