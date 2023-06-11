import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

    import SignupForm from './SignupForm'
    



function Signup({setSection,vars}) {
  const navigate = useNavigate()

  return (
    <>
      <SignupForm vars={vars} setSection={setSection}/>
      
    </>
  )
}

export default Signup
