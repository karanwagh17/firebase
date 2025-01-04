import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../services/firebase'

const Navbar = () => {

    const handleLogout=()=>{
        signOut(auth)
        .then((res)=>{
            console.log(res)
            alert("Logout...")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div style={{display:"flex",justifyContent:"space-between",width:"90%",margin:"auto",padding:"10px"}}>
      <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}} to={'/'}>Home</Link>
      <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}} to={'/products'}>Products</Link>
      <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}} to={'/addproduct'}>AddProduct</Link>
      <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}} to={'/login'}>Login</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar
