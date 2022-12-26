import React from 'react'

import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid item xs={12} lg={4}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
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