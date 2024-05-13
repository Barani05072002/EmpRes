import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import empContext from './empContext';
import {useParams} from 'react-router-dom';
import '../styles/Home.css'


const Home = () => {
    const {id} = useParams();
    const [self,setSelf] = useState({});
    useEffect(()=>{
      const url = `http://localhost:5555/api/emp/${id}`
      fetch(url)
      .then((response)=>response.json())
      .then((result)=>setSelf(result))
    },[id])
  return (
    <div className='home'>
    <empContext.Provider value={self}>
        <Nav id={id}/>
        {
        self['designation']==="HR"
        ? <h1 className='admin'>Welcome admin Page</h1>
        : <h1 className='admin'>Welcome {self['name']}</h1>
        }
    </empContext.Provider>
    </div>
  )
}

export default Home