
import { useState ,useEffect} from 'react';
import axios from 'axios';
import './App.css';
 /* [] its used initial, reason for map function */
function Put() {
  const [state,setState]=useState([])
  useEffect(()=>{
    axios.put("https://reqres.in/api/users/2",{
        "name": "morpheus",
        "job": "Bestrow"
    })
    .then(x=>console.log(x))
    .catch(er=>console.log(er))
  })

  return (
    <>
     <h1>Axios in REACT</h1>
      
      
    </>
  )
}

export default Put
