import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import Table from './Table'
import Thead from './Thead'

const EmployeeList = () => {
  const {id} = useParams();
  const [data,setData] = useState([])
  const [changeState,setState] = useState(0);

  useEffect(()=>{
    const url = "http://localhost:5555/api/emp/"
    fetch(url)
    .then((response)=>response.json())
    .then((result)=>setData(result))
  },[changeState])

  const handleState =(child)=>{
    setState(changeState + child['state'])
    if(child['sortType']=="none"){
      return setState(changeState+1);
    }
    const url = `http://localhost:5555/api/emp/${child['sortType']}`
    console.log(url)
    fetch(url)
    .then((response)=>response.json())
    .then((result)=>setData(result))
  }

  return (
    <div>
        <Nav id={id}/>
        <Thead data={data} />
        <Table data={data} onChange={handleState}/>
    </div>
  )
}

export default EmployeeList