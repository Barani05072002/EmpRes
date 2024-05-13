import React, { useContext, useEffect } from 'react'
import Nav from './Nav'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/profile.css'

const Profile = () => {
  const {id} = useParams();
  const [data,setData] = useState({});
  const navigate = useNavigate();

  let show = "";

  useEffect(()=>{
    const url =`http://localhost:5555/api/emp/${id}`
    fetch(url)
    .then((response)=>response.json())
    .then((result)=>setData(result))
  },[])

  const back = ()=>{
    navigate(`/${id}/employee-list`)
  }
  return (
    <div>
      <Nav id={id}/>
      <div className='profile'>
        <h1>{data.name}</h1>
        <div>
          <p>Name : {data.name}</p>
          <p>Email : {data.email}</p>
          <p>Mobile :{data.mobile}</p>
          <p>Designation : {data.designation}</p>
          <p>gender : {data.gender}</p>
          <p>course : {data.course}</p>
          <p>CreateAt : {data.createdAt}</p>
        </div>
        <div className='choice'>
          <button
          onClick={back}
          className="card_button"
          >Back</button>
        </div>
      </div>
    </div>
  )
}
export default Profile;