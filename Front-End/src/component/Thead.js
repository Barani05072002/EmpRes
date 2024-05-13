import React, { useState } from 'react'
import '../styles/Thead.css'
import { useNavigate, useParams } from 'react-router-dom'

const Thead = (props) => {
    const {id} = useParams();
    const [search,setSearch] = useState({
      searchData : "",
      filter : "name"
    })
    const navigate = useNavigate();
    const createEmployee =(e)=>{
        navigate(`/${id}/employee-list/create-employee`,{replace : true})
    }
    const onChangeHandler=(e)=>{
      const name = e.target.name
      setSearch({...search,[name]:e.target.value})
    }
    const searchUser = ()=>{
      console.log(search)
    }
  return (
    <div className='Thead'>
        <h1>Total Count : {props.data.length}</h1>
        <button onClick={createEmployee}>Create Employee</button>
        <div className="input">
            <input type="text" className="input_field" name='searchData' 
            onChange={onChangeHandler}
            value={search.searchData} required/>
            <label className="input_label">Search</label>
        </div>
        <select name="filter" value={search.filter} onChange={onChangeHandler}>
          <option value="name">name</option>
          <option value="email">email</option>
        </select>
        <button onClick={searchUser}>Search</button>
    </div>
  )
}

export default Thead