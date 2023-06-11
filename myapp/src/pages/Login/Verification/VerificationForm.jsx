import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Button,FormControl,InputLabel,OutlinedInput,FormHelperText,Alert, Snackbar, TextField,Select,MenuItem} from "@mui/material"
import axios from 'axios';

const VerificationForm = ({setSection,vars}) => {
const navigate=useNavigate();
let Regex= {password : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
  const [toast, setToast] = useState({ open: false, status: "", msg: "" })

  const [formData, setFormData] = useState({
    verificationCode: '',
    Submit: '',
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
verificationCode:formData.verificationCode,
}






    axios.post(import.meta.env.VITE_API +  'users/otp',{
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
        label="Verification Code"
        name="verificationCode"
        value={ formData.verificationCode }
        onChange={handleChange}
        type='text'
        margin="normal"
        fullWidth 
        helperText={ false  && ""}
         error={ false }
      
      />
   




      

   


                        <Button type="Submit" variant="contained" onClick={(e) =>handleSubmit(e)} color="primary">
        Submit
      </Button> 



   
   
    </FormControl>   
          </>
  );
}

export default VerificationForm;