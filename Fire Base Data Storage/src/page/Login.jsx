import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../services/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {
    const handleLogin=()=>{
        signInWithPopup(auth,provider)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div style={{marginTop:"10%"}}>
      <h1 style={{textAlign:"center"}}>Login to enter product page</h1>

      <GoogleButton style={{margin:"auto"}} onClick={handleLogin}/>
    </div>
  )
}

export default Login
