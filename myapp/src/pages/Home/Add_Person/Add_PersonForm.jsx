import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Button,FormControl,InputLabel,OutlinedInput,FormHelperText,Alert, Snackbar, TextField,Select,MenuItem} from "@mui/material"
import axios from 'axios';

const Add_PersonForm = ({setSection,vars}) => {
const navigate=useNavigate();
let Regex= {password : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
  const [toast, setToast] = useState({ open: false, status: "", msg: "" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    submit: '',
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
}






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
        label="Name"
        name="name"
        value={ formData.name }
        onChange={handleChange}
        type='text'
        margin="normal"
        fullWidth 
        helperText={ false  && ""}
         error={ false }
      
      />
   




      

      <TextField
        label="Email"
        name="email"
        value={ formData.email }
        onChange={handleChange}
        type='text'
        margin="normal"
        fullWidth 
        helperText={ false  && ""}
         error={ false }
      
      />
   




      

   


                        <Button type="submit" variant="contained" onClick={(e) =>handleSubmit(e)} color="primary">
        Submit
      </Button> 



   
   
    </FormControl>   
          </>
  );
}

export default Add_PersonForm;