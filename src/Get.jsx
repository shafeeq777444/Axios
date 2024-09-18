
import { useState ,useEffect} from 'react';
import axios from 'axios';
import './App.css';
 /* [] its used initial, reason for map function */
function Get() {
  const [state,setState]=useState([])
  useEffect(()=>{
    axios.get("https://reqres.in/api/users?page=2")
    .then(x=>setState(x.data.data))
    .catch(er=>console.log(er))
  })

  return (
    <>
     <h1>Axios in REACT</h1>
      {state.map((data,ind)=>{
       return <p key={ind}>{data.email}</p>
      })}
      
    </>
  )
}

export default Get
