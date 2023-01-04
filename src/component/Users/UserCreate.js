import * as React from 'react';
import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import authUser from '../../services/api/api';

const UserCreate =()=>{
    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const btnstyle={margin:'8px 2px',width:100}

    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [dob, setDob] = React.useState('');
    const {http,setToken} = authUser();
    const onSubmit = data => {
        
        data.dob = moment(dob).format('y-M-D');

       http.post('/register',data).then((res)=>{
        navigate('/login');
       })
        

    };

    return(
        <Card>
            
        <Grid item xs={12} lg={4} >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                   
                    <h2>User Registration</h2>
                </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    {/* Name */}
                    <Grid item xs={12} lg={12}>
                        <TextField 
                        label='Name' 
                        placeholder='Enter username' 
                        variant="outlined" 
                        fullWidth 
                        size = "small"
                        name='name'
                        {...register("name", { required: true })}
                        />
                    {errors.name && <span>This field is required</span>}
                        
                    </Grid>

                    {/* email */}
                    <Grid item xs={12} lg={12}>
                            <TextField 
                            label='Email' 
                            placeholder='Enter email' type='email' 
                            variant="outlined" 
                            fullWidth 
                            size = "small"
                            name='email'
                            {...register("email", { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
                    </Grid>

                     {/* password  */}
                     <Grid item xs={12} lg={12}>
                            <TextField 
                            label='Password ' 
                            placeholder='Enter password' type='password' 
                            variant="outlined" 
                            fullWidth 
                            size = "small"
                            name='password'
                            {...register("password", { required: true })}
                            />
                            {errors.password && <span>This field is required</span>}
                    </Grid>

                     {/* Address */}
                     <Grid item xs={12} lg={12}>
                            <TextField 
                            label='Address' 
                            placeholder='Enter Address' type='text' 
                            variant="outlined" 
                            fullWidth 
                            size = "small"
                            name='address'
                            {...register("address", { required: true })}
                            />
                             {errors.address && <span>This field is required</span>}
                    </Grid>

                     {/* Contact */}
                     <Grid item xs={12} lg={12}>
                            <TextField 
                            label='Contact No' 
                            placeholder='Enter Contact Number' 
                            type='text' 
                            variant="outlined" 
                            fullWidth 
                            size = "small"
                            name='contact'
                            {...register("contact", { required: true })}
                            />
                             {errors.contact && <span>This field is required</span>}
                    </Grid>

                     {/* Dob */}
                     <Grid item xs={12} lg={12}>
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Birth Day"
                            inputFormat="MM/DD/YYYY"
                            value={dob}
                            onChange={e=>setDob(e)}
                            name="date_picker"
                            renderInput={(params) => 
                            <TextField {...params}  size = "small" />}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} lg={12} align='center'>
                        <Button type='submit'   size = "small" color='primary' variant="contained" style={btnstyle} fullWidth>Save</Button>
                        <Button type='clear'   size = "small" color='primary' variant="contained" style={btnstyle} fullWidth>Clear</Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Grid>
        </Card>
    )
}

export default UserCreate;