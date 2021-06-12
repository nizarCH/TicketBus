import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Grid} from '@material-ui/core'
const Départ = () => {
  const [départ, setDépart] = useState("Tanger")
  const arrayD=["Tanger"]

    return (
       <div>
 <div className="select-box">
 <Grid container justify="center">
   <Autocomplete
        value={départ}
        disabled
       className="selected"
       onChange={(event, value) => setDépart(value)}
       options={arrayD.map((voyage)=> voyage)}
        renderInput={(params) => <TextField {...params}  variant="outlined"/>}
      />
   </Grid>
       
        </div>
       </div>
        
    )


}

export default Départ
