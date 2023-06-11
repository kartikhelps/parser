import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { Button,FormControl,InputLabel,OutlinedInput,FormHelperText,Alert, Snackbar, TextField } from "@mui/material"

import Signin from "./Signin"
import Signup from "./Signup"
import Verification from "./Verification"
import Header from "./Header"

const Login = () => {
  
  const [toast, setToast] = useState({ open: false, status: "", msg: "" })
  
  const [vars,setVars] = useState({})
  const [isLoading,setLoad] =useState(false)
  const [section,setSection] = useState({ "SigninState":true,"SignupState":false,"VerificationState":false })



 useEffect(() => {
axios.get(import.meta.env.VITE_API +  'master/').then((res) => {
      setVars(res.data.data)
      setLoad(true)
    }).catch(err => {
      setToast({ open: true, msg: err.response.data.error, status: "error" })

    }); 
  }, []);




 
  
  return (
  <>
    <Snackbar open={toast.open} autoHideDuration={6000} onClose={() => setToast((prev) => ({ ...prev, open: false }))}>
      <Alert onClose={() => setToast((prev) => ({ ...prev, open: false }))} severity={toast.status} sx={ { width: "100%" } }>
        {toast.msg}
      </Alert>
    </Snackbar>
    { 
      
isLoading &&
<>
        {section.SigninState &&  <Signin vars={vars} setSection={setSection} />}
        
        {section.SignupState &&  <Signup vars={vars} setSection={setSection} />}
        
        {section.VerificationState &&  <Verification vars={vars} setSection={setSection} />}
        
      <Header vars={vars} setSection={setSection} />
        
  </>
}
  </>
  )
}

export default Login

