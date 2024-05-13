import React, { useEffect, useState } from 'react';
import '../styles/Toast.css';

const Toast = ({message,show})=>{
  const [showSnackbar,setShowSnackbar] = useState(show);
  useEffect(()=>{
    setShowSnackbar(show)
    if(show){
      setTimeout(()=>{
        setShowSnackbar(false)
      },3000)
    }
  },[show])

  return(
    <div>
      {/* <button onClick={handleToast}>show toast</button> */}
      {showSnackbar && (<div id='snackbar' className='show'>{message}</div>)}
    </div>
  )
}

export default Toast;
