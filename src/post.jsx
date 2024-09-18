
import { useState ,useEffect} from 'react';
import axios from 'axios';
import './App.css';
 /* [] its used initial, reason for map function */
function Post() {
  const [state,setState]=useState([])
  useEffect(()=>{
    axios.post("https://reqres.in/api/users",{
        "name": "shafeeq",
        "job": "leader"
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

export default Post
