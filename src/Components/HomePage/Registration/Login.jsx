import React, {useState} from 'react'
import styles from './RegistrationModal.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [loginText, setLoginText] = useState(false);
    const [username, setUsername] = useState("");
    const handleLoginText = () => {
        if(username.length>0 && username.length<3){
          setLoginText(true);
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
          label="USERNAME"
          type="search"
          variant="filled"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size = "small"
        />
       {loginText?<p style={{color:"red", fontSize:"small", marginTop:"-10px"}}>Username must be between 3 and 20 characters</p>:<></>}
           <TextField
          id="filled-search"
          label="PASSWORD"
          type="search"
          variant="filled"
          onClick={handleLoginText}
          size = "small"
        />
        </div>
    </Box>
      <button className={styles.btn}>Log In</button>
      
    <div className={styles.afterBtnText1}>
        <span>Forgot your username or password ?</span>
    </div>
        </>
    )
}

export default Login;
