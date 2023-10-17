import React, { useState } from 'react'

function Child1(props) {

    const [data,setData] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.getData(data)
        
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
           <input type="text" value= {data} onChange={e => setData(e.target.value)} />
           <button type='submit'>Submit</button>
           
        </form>
    </div>
  )
}

export default Child1