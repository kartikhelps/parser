import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { Button,FormControl,InputLabel,OutlinedInput,FormHelperText,Alert, Snackbar, TextField } from "@mui/material"

import Heading from "./Heading"
import DataInfo from "./DataInfo"
import Charts from "./Charts"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Card_1 from "./Card_1"
import Card_2 from "./Card_2"
import Card_3 from "./Card_3"

const Dashboard = () => {
  
  const [toast, setToast] = useState({ open: false, status: "", msg: "" })
  
  const [vars,setVars] = useState({})
  const [isLoading,setLoad] =useState(false)
  const [section,setSection] = useState({ "ListViewState":true })





 
  
  return (
  <>
    <Snackbar open={toast.open} autoHideDuration={6000} onClose={() => setToast((prev) => ({ ...prev, open: false }))}>
      <Alert onClose={() => setToast((prev) => ({ ...prev, open: false }))} severity={toast.status} sx={ { width: "100%" } }>
        {toast.msg}
      </Alert>
    </Snackbar>
    { 
      
<>
        {section.HeadingState &&  <Heading vars={vars} setSection={setSection} />}
        
        {section.DataInfoState &&  <DataInfo vars={vars} setSection={setSection} />}
        
        {section.ChartsState &&  <Charts vars={vars} setSection={setSection} />}
        
        {section.SidebarState &&  <Sidebar vars={vars} setSection={setSection} />}
        
      <Header vars={vars} setSection={setSection} />
        
        {section.Card_1State &&  <Card_1 vars={vars} setSection={setSection} />}
        
        {section.Card_2State &&  <Card_2 vars={vars} setSection={setSection} />}
        
        {section.Card_3State &&  <Card_3 vars={vars} setSection={setSection} />}
        
  </>
}
  </>
  )
}

export default Dashboard

