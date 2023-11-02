//This is used to add r insert new data to that url
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Axios_Post() {

    const navigate = useNavigate();
    const [newResturant,setNewResturant] = useState({
        restaurantName:"",                 //These are the values i am getting from user so initially i am setting my usestate as empty
        openTime:"",
        closeTime:""
    })

    const handleSubmit = e => {
        e.preventDefault()           //this will stop reloading the page
        axios.post('http://localhost:8000/restaurants',newResturant) //important -- putting newResturant data into this url
        .then(res => console.log(res.data))
        navigate('/restuarent')
    }

    const handleBack = () => {
        navigate('/restuarent')
    }
  return (
    <div>
        <div>
            
            <div>
                <h3>Add Resturant</h3>
            </div>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="resname">Resturant Name:</label> {/* below we are assigning the entered data usind setNewResturant */}
                <input type="text" id='resname'  onChange={e => setNewResturant({...newResturant,restaurantName:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="open">Opening Time:</label>
                <input type="text" id='open' onChange={e => setNewResturant({...newResturant,openTime:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="close">Closing Time:</label>
                <input type="text" id='close' onChange={e => setNewResturant({...newResturant,closeTime:e.target.value})}/>
            </div>
            <div>
                <button type='submit'>Add</button>
                <button onClick={handleBack}>Back</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Axios_Post