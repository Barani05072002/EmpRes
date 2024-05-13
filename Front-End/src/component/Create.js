import React, { useState } from 'react'
import '../styles/Create.css'
import { useNavigate, useParams } from 'react-router-dom'
import Toast from './Toast';

const Create = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data,setData] = useState({
        name : '',
        email : '',
        mobile :'',
        designation : "SALES",
        gender : "",
        course : "",
        // file : null
    });
    const [toast,setToast] = useState({
        message : '',
        flag : false
    });

    const back = ()=>{
        navigate(`/${id}/employee-list`)
    }

    const onChangeHandler=(e)=>{
        const name = e.target.name
        setData({...data,[name]:e.target.value})
    }

    const addEmployee = async (e)=>{
        e.preventDefault();
        console.log(data)
        const url = "http://localhost:5555/api/emp"
        const response = await fetch(url,{
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data)
        })
        setTimeout(() => {
            setToast({
                message : 'Employee Created Successfully',
                flag : true
            })
        }, 2000);
        back()
    }
  return (
    <div className="container">
        <h1>Create-Employee</h1>
        <form action="Dashboard.html" className="card-form" onSubmit={addEmployee}>
            <div className="input">
                <input type="text" className="input_field" 
                name='name'
                onChange={onChangeHandler}
                required
                value={data.name}
                />
                <label className="input_label">Username</label>
            </div>
            <div className="input">
                <input type="text" className="input_field" 
                name='email'
                onChange={onChangeHandler}
                required 
                value={data.email}
                />
                <label className="input_label">Email</label>
            </div>
            <div className='input'>
                <input type="text" className='input_field' 
                name='mobile'
                onChange={onChangeHandler}
                required
                value={data.mobile}
                />
                <label className='input_label'>Mobile</label>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="Designation">Designation</label>
                <select name="designation" id="Designation" className='select'
                onChange={onChangeHandler}
                value={data.designation}
                >
                    <option value="HR">HR</option>
                    <option value="MANAGER">Manager</option>
                    <option value="SALES">Sales</option>
                </select>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="Gender">Gender</label>
                <div className='flex select'>
                    <label htmlFor="Male">
                        <input type="radio" name='gender' id='Male' 
                        value={"Male"} 
                        // checked={data.gender==='male'}
                        onChange={onChangeHandler}
                        />Male
                    </label>
                    <label htmlFor="Female">
                        <input type="radio" name='gender' id='Female'
                        value={"Female"} 
                        // checked={data.gender==='female'}
                        onChange={onChangeHandler}
                        />Female
                    </label>
                </div>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="Course">Course</label>
                <div className='flex select'>
                    <label><input type="checkbox" name='course'
                    value="MCA"
                    // checked={data.course+="MCA "}
                    onChange={onChangeHandler}
                    />MCA</label>
                    <label><input type="checkbox" name='course'
                    value="BCA"
                    // checked={data.course+="BCA "}
                    onChange={onChangeHandler}
                    />BCA</label>
                    <label><input type="checkbox" name='course'
                    // checked={data.course+="BSC "}
                    value="BSC"
                    onChange={onChangeHandler}
                    />BSc</label>
                </div>
            </div>
            <div className='input-1 flex'>
                <label htmlFor="myImage">Profile</label>
                <input type="file" name='myImage' className='select'/>
            </div>
            <div className='choice'>
                <button className="card_button" type='submit'>Submit</button>
                <button className='card_button' onClick={back}>Back</button>
            </div>
        </form>
        <Toast message={toast.message} show={toast.flag}/>
    </div>
  )
}

export default Create