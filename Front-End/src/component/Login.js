import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  const [data,setData] = useState({username : "",password:""})
  const [warn,setWarn] = useState({display : "none",content : ""})
  const navigate = useNavigate();

  const onChangeHandler = (e) =>{
      const name = e.target.name
      setData({...data,[name]:e.target.value})
      setWarn({display : "noen",content : ""})
  }

  const formHandler = (e)=>{
    e.preventDefault()
    const url = "http://localhost:5555/api/users/"
    const login = JSON.parse(localStorage.getItem("userLogin"))
    if(login[data.username]){
       fetch(url+login[data.username])
       .then((response)=> response.json())
       .then((result) =>{
          if(result['password'] === data.password){
            setWarn({
              display : 'block',
              content : 'login Successfully,loading...'
            })
            navigate(`/${result['employee']}/home`,{replace : true})
            // navigate(`/home/${result['employee']}`)
          }
          else{
            setWarn({
              display : 'block',
              content : 'password incorrect'
            })
          }
       })
      }else{
      setWarn({display : "block", content : "User not found"})
    }
  }
  // const formHandler = (e) =>{
    //   e.preventDefault()
    //   const url = "http://localhost:5555/api/users/"
      
    //   const login = fetch(url,{
    //     method : "POST",
    //     mode : "cors",
    //     header : {
    //       "Content-Type" : "application/json" 
    //     },
    //     body : JSON.parse(data)
    //   })
  
    //   login.then((response)=>{return response.json()})
    //   .then((res)=>{
    //     console.log(res)
    //     setWarn({
    //       display : 'block',
    //       content : res.message
    //     })
    //   })
    //   .catch((error)=>{
    //     setWarn({
    //       display :'blocl',
    //       content : error.message
    //     })
    //   })
    // }
  // const formHandler = (e) =>{
  //   e.preventDefault()
  //   const url = "http://localhost:5555/api/users/"
    
  //   const login = fetch(url,{
  //     method : "POST",
  //     mode : "cors",
  //     header : {
  //       "Content-Type" : "application/json" 
  //     },
  //     body : JSON.parse(data)
  //   })

  //   login.then((response)=>{return response.json()})
  //   .then((res)=>{
  //     console.log(res)
  //     setWarn({
  //       display : 'block',
  //       content : res.message
  //     })
  //   })
  //   .catch((error)=>{
  //     setWarn({
  //       display :'blocl',
  //       content : error.message
  //     })
  //   })
  // }

  return(
    <div className="container">
        <h1>Login</h1>
        <form action="Dashboard.html" className="card-form" onSubmit={formHandler}>
            <div className="input">
                <input type="text" className="input_field" name='username' value={data.username} 
                  onChange={onChangeHandler}
                required/>
                <label className="input_label">Username</label>
            </div>
            <div className="input">
                <input type="password" className="input_field" name='password' value={data.password}
                  onChange={onChangeHandler}
                required />
                <label className="input_label">Password</label>
            </div>
            <button className="card_button">Submit</button>
        </form>
        <p style={warn}>{warn.content}</p>
    </div>
  )
}

export default Login