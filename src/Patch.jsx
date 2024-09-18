
import { useState ,useEffect} from 'react';
import axios from 'axios';
import './App.css';
 /* [] its used initial, reason for map function */
function Patch() {
  useEffect(()=>{
    axios.patch("https://reqres.in/api/users/2",{"first_name":"Janet"})
    .then(x=>console.log(x))
    .catch(er=>console.log(er))
  })

  return (
    <>
     <h1>Axios in REACT</h1>
      
      
    </>
  )
}

export default Patch
