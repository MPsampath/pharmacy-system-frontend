import React, { useState } from 'react'

import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import authUser from '../services/api/api'
import axios from 'axios'
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const Login=()=>{
    //Style Variables
    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    //Data state
    const [username,setUserName] = useState();
    const [password,setPassword] = useState();
    const signIn = useSignIn();

    const submitForm =  async () =>{
        const user ={
            username: username,
            password: password,
        }
        try {
            const response = await axios.post('http://localhost:8002/api/login',{email:username,password:password}).then((res)=>{
                signIn({
                    token: res.data.token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: {email: username}
                })
            })  
        } catch (error) {
            
        }
       

    }

    return(
        <Grid item xs={12} lg={4}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                label='Username' 
                placeholder='Enter username' 
                variant="outlined" 
                fullWidth 
                required
                onChange={e=>setUserName(e.target.value)}/>
                <TextField 
                label='Password' 
                placeholder='Enter password' 
                type='password' 
                variant="outlined" 
                fullWidth 
                required
                onChange={e=>setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={()=>submitForm()} fullWidth>Sign in</Button>
                <Typography > Do you have an account ?
                     <Link href="/new_user" >
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;