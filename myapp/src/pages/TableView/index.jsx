import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { Button,FormControl,InputLabel,OutlinedInput,FormHelperText,Alert, Snackbar, TextField } from "@mui/material"

import ListSection from "./ListSection"

const TableView = () => {
  
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
    { 
      
<>
        {section.ListSectionState &&  <ListSection vars={vars} setSection={setSection} />}
        
  </>
}
  </>
  )
}

export default TableView

