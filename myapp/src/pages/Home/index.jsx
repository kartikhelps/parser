import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { Button,FormControl,InputLabel,OutlinedInput,FormHelperText,Alert, Snackbar, TextField } from "@mui/material"

import Home from "./Home"
import Header from "./Header"
import Leads from "./Leads"
import Listview from "./Listview"
import Add_Person from "./Add_Person"
import Modal_Add from "./Modal_Add"

const Home = () => {
  
  const [toast, setToast] = useState({ open: false, status: "", msg: "" })
  
  const [vars,setVars] = useState({})
  const [isLoading,setLoad] =useState(false)



 
  
  return (
  <>
    <Snackbar open={toast.open} autoHideDuration={6000} onClose={() => setToast((prev) => ({ ...prev, open: false }))}>
      <Alert onClose={() => setToast((prev) => ({ ...prev, open: false }))} severity={toast.status} sx={ { width: "100%" } }>
        {toast.msg}
      </Alert>
    </Snackbar>
        {section.HomeState &&  <Home vars={vars} setSection={setSection} />}
        
      <Header vars={vars} setSection={setSection} />
        
        {section.LeadsState &&  <Leads vars={vars} setSection={setSection} />}
        
        {section.ListviewState &&  <Listview vars={vars} setSection={setSection} />}
        
        {section.Add_PersonState &&  <Add_Person vars={vars} setSection={setSection} />}
        
        {section.Modal_AddState &&  <Modal_Add vars={vars} setSection={setSection} />}
        
  </>


  )
}

export default Home

