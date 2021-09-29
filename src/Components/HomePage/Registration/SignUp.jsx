import React, { useState } from 'react'
import styles from './RegistrationModal.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SignUp = () => {
  const [loginText, setLoginText] = useState(false);
  const [email, setEmail] = useState("")
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if(email.length > 1){
      if((email.includes("@")) && (email.includes("."))){
setLoginText(false);
      }
      else{
        setLoginText(true);
      }
    }
    else{
      setLoginText(false);
    }
  }
    return (
       <>
              <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mb: 1.2, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      
    >
        <div>
        <TextField
          id="filled-search"
          label="EMAIL"
          type="email"
          variant="filled"
          name="email"
          value={email}
          // onChange={(e) => setEmail(e.target.value)}
          onChange={handleEmail}
          
        />
          {loginText?<p style={{color:"red", fontSize:"small", marginTop:"-10px"}}>Please fix your email to continue.</p>:<></>}
        <TextField
          id="filled-search"
          label="CREATE A USERNAME"
          type="search"
          variant="filled"
          
        />
           <TextField
          id="filled-search"
          label="PASSWORD"
          type="search"
          variant="filled"
          
        />
        </div>
    </Box>
      <button className={styles.btn}>Continue</button>
   
        </>
    )
}

export default SignUp
