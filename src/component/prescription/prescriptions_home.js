import { Button, Card, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const PrescriptHome =()=>{
 const navigate = useNavigate();

    const paperStyle={padding :2,height:'70vh',width:"195vh", margin:"20px auto"}
    return(
        <Card>
        <Button style={{marginLeft:'5px'}} variant="contained" color="success" onClick={e=>navigate('/prescription_upload')}>New</Button>

            <Paper elevation={10} style={paperStyle}>
            <TableContainer component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                        <TableCell>Order Number</TableCell>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Ammount</TableCell>
                        <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            </Paper>
        </Card>
    )
}
export default PrescriptHome;