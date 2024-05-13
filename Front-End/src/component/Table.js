import React,{useEffect, useState} from 'react'
import '../styles/Table.css'
import { useNavigate, useParams } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import Toast from './Toast';

const Table = ({data,onChange}) => {
    const {id} = useParams();
    const [sort,setSort] = useState("none");
    const navigate = useNavigate();

    const [toast,setToast] = useState({
        message : '',
        flag : false
    });

    const deleteUser = (e)=>{
        const deleteId = e.target.value;
        if(deleteId!==id){
            const url = `http://localhost:5555/api/emp/${deleteId}`
            const response = fetch(url,{method:'delete'})
            // .then((res)=>console.log("user deleted successfully"))
            // .catch((error)=>console.log("erro"+error.message))
            setToast({
                message : "Deleted Successfully",
                flag : true
            })
            onChange({
                state : 1,
                sortType : sort
            })
        }else{
            setToast({
                message : "Cannot Delete your own details",
                flag : true
            })
            return
        }
        setTimeout(() => {
            setToast({
                message : "",
                flag : false
            })
        }, 2000);
    }
    const editUser = async (e)=>{
        const editId = e.target.value;
        let editData = {}

        const url = `http://localhost:5555/api/emp/${editId}`
        await fetch(url)
        .then((response)=>response.json())
        .then((result)=>editData=result)

        navigate(`/${id}/employee-list/edit`,{state:editData})
    }
    const showBy = (e)=>{
        const type = e.target.textContent
        if(sort===type.toLowerCase())
            return setSort("none")
        console.log(sort)
        setSort(type.toLowerCase())
        onChange({
            state : 0,
            sortType : type.toLowerCase()
        })
    }
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th onClick={showBy}>Name<FaCaretDown/></th>
                <th onClick={showBy}>Email<FaCaretDown/></th>
                <th>Mobile</th>
                <th>Designation</th>
                <th>gender</th>
                <th>Course</th>
                <th onClick={showBy}>Date<FaCaretDown/></th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody> 
            {data.map((value,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{"image"}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.mobile}</td>
                <td>{value.designation}</td>
                <td>{value.gender}</td>
                <td>{value.course}</td>
                <td>{value.createdAt}</td>
                <td className='choice'>
                    <button value={value._id} onClick={editUser}>Edit</button>
                    <button value={value._id} onClick={deleteUser}>Delete</button>
                </td>
            </tr>)}
        </tbody>
    </table>
    <Toast message={toast.message} show={toast.flag}/>
    </>
  )
}

export default Table