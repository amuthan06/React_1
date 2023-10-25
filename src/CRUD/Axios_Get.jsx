import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios_Get() {
    const [practise,setPrsctise] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/restaurants') //use get to get data from url of api
        .then(res => setPrsctise(res.data) )
        
    })
  return (
    <div>Practise
        {practise.map(e =>{    //we have to map what we want 
            return(            //don't forget to use return
                <div>          {/* inside return we need to give any tag */}
                {e.restaurantName} 
                </div>
            )
        })}
    </div>
  )
}

export default Axios_Get