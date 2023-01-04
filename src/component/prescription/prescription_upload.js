import { Button, Card, Input } from "@mui/material";



const PrescriptionUpload = () =>{


    return (
        <Card>
            <h1>Upload prescription</h1>
            <div>
            <Input type="file" />

            <Button style={{marginLeft:'5px'}} variant="contained" color="success" >Upload</Button>
            </div>
        </Card>
    )
}
export default PrescriptionUpload;