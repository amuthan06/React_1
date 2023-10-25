import React, { useState } from 'react'

function Granchild(props) {

  const dataFromChild=props.dataFromChild

  const [granData,setGranData] = useState(dataFromChild)

  const handleSubmit = (e) => {
    e.preventDefault()
    setGranData('GrandChild')
    props.granToChild(granData)
  }
  props.granToChild(granData)
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Granchild - {dataFromChild}</h1>
        <button type='submit'>Change</button>
      </form>
    </div>
  )
}

export default Granchild