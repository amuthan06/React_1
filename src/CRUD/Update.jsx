import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {

    const [data,setData] = useState([])
    const {id} = useParams()  /* using this we are geting id from another component. Here we are geting that id */
    
    /* this code is in another component 
    const handleEdit =(e)=>{
        navigate(`/edit/${e.id}`) ----> this line we are passing id to edit page
      } */

    useEffect (() => {
        axios.get(`http://localhost:8000/restaurants/${id}`) /*here we are getting data from that id */
        .then (res => setData(res.data))
        .catch(err => console.log(err))
    },[])

  return (
    <div>
        <div>
            
            <div>
                <h3>Edit Resturant Details</h3>
            </div>

            <form>
            <div>
                <label htmlFor="resname">Resturant Name:</label>
                <input type="text" id='resname' value={data.restaurantName}/>{/* here we are displaying values related to that id */}
            </div>
            <div>
                <label htmlFor="open">Opening Time:</label>
                <input type="text" id='open'value={data.openTime}/> {/* here we are displaying values related to that id */}
            </div>
            <div>
                <label htmlFor="close">Closing Time:</label>
                <input type="text" id='close' value={data.closeTime}/> {/* here we are displaying values related to that id */}
            </div>
            <div>
                <button type='submit'>Edit</button>
                <button onClick={()=>handleBack()}>Back</button>
            </div>
            </form>

        </div>
    </div>
  )
}

export default Update