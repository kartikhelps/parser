import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Button,FormControl,InputLabel,OutlinedInput,FormHelperText,Alert, Snackbar, TextField,Select,MenuItem} from "@mui/material"
import axios from 'axios';

const SigninForm = ({setSection,vars}) => {
const navigate=useNavigate();
let Regex= {password : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
  const [toast, setToast] = useState({ open: false, status: "", msg: "" })

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    Login: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
const sendData = {
email:formData.email,
password:formData.password,
}






    axios.post(import.meta.env.VITE_API +  'users/login',{
...sendData
    }).then((res) => {



      navigate('/Home')






      setLoad(true)
    }).catch(err=>{
      setToast({ open: true, msg: err.response.data.error, status: "error" })
  });
}
  return (
<>
    <Snackbar open={toast.open} autoHideDuration={6000} onClose={() => setToast((prev) => ({ ...prev, open: false }))}>
      <Alert onClose={() => setToast((prev) => ({ ...prev, open: false }))} severity={toast.status} sx={ { width: "100%" } }>
        {toast.msg}
      </Alert>
    </Snackbar>
   <FormControl onSubmit={handleSubmit}>
      

      <TextField
        label="Email"
        name="email"
        value={ formData.email }
        onChange={handleChange}
        type='text'
        margin="normal"
        fullWidth 
        helperText={ !(Regex.email.test(formData.email))  && "Format not Correct"}
         error={ !(Regex.email.test(formData.email)) }
      
      />
   




      

      <TextField
        label="Password"
        name="password"
        value={ formData.password }
        onChange={handleChange}
        margin="normal"
        fullWidth
        type="password"
        helperText={ !(Regex.password.test(formData.password)) && "Should have at least 5 characters with 1 number"}
        error={ !(Regex.password.test(formData.password)) }
      
      />
   




      

   


                        <Button type="Login" variant="contained" onClick={(e) =>handleSubmit(e)} color="primary">
        Login
      </Button> 



   
   
    </FormControl>   
          </>
  );
}

export default SigninForm;