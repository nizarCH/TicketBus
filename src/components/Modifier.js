import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {BrowserRouter as Router, Route,Switch,Link,Redirect,useHistory} from 'react-router-dom'

export const Modifier = () => {
    const datavoy= window.localStorage.getItem("data-voyage")
    const res=JSON.parse(datavoy)
// console.log(res)
    const {villeId}= useParams()
    const travels=villeId.split('&')

    const voyages = useSelector(state => state.allVoyages.voyages)
    const [voyage, setVoyage] = useState(travels[2])
    const [Dates, setDate]=useState(null)
    const [passager, setPassager] = useState(travels[5])
    const [travel, setTravel] = useState(voyages)
    const history=useHistory()
    const [voyageError, setVoyageError] = useState(true)
    const [dateError, setDateError] = useState(true)
    const [passagerError, setPassagerError] = useState(true)

    
    //============Filtrage==========//
    var date = new Date(Dates)
    var finaldate = date.getDate() + '-' +  (date.getMonth() + 1)  + '-' +  date.getFullYear()
    const arrayP=["1","2","3","4","5"]

    const filtervoyage = travel.filter((voy)=>voy.nom_fr ===  voyage)
    const voyid = filtervoyage.map((voyage)=> voyage.id)
    const voyar= filtervoyage.map((voyage)=> voyage.nom_ar)
    const voyprix=filtervoyage.map((voyage)=> voyage.prix)



    const dataV={
        id:voyid,
        nom_fr: voyage,
        nom_ar:voyar,
        prix: voyprix,
        date: finaldate,
        psg: passager
    }
//  console.log(dataV)

    useEffect(()=>{
        const data =  window.localStorage.getItem('data-voyages');
        setTravel(JSON.parse(data))

        const time=window.localStorage.getItem('Date')
         setDate(new Date(time)) 

      },[])
     //============Errors==========//
     const handlevoyage= (voy)=>{
        if(voy == "" || voy == null){
            setVoyageError(false)
        }
        else{
            setVoyageError(true)
        }
    }
    const handlepassager= (voy)=>{
        if(voy==""|| voy==null){
            setPassagerError(false)
        }
        else{
            setPassagerError(true)
        }
    }
    const handledate= (voy)=>{
        if(voy=="" || voy=="1-1-1970"){
            setDateError(false)
        }
        else{
            setDateError(true)
        }
    }
    const handleError= ()=>{
        handlevoyage(voyage)
        handlepassager(passager)
        handledate(finaldate)
    }




const Modify=()=>{
   
    if(voyage!==null && passager!==null && finaldate!=="1-1-1970" ){
     history.push(`/Recherche/${dataV.id}&${dataV.nom_ar}&${dataV.nom_fr}&${dataV.date}&${dataV.prix}&${dataV.psg}`)

    }
}

const Callfunc=()=>{
    handleError()
    Modify()
    
}

    return (
        <div>
             <section >
                 <div className="Vcontainer-second container">
             {/* select box */}
                    <div className="select-box-second">
   
                {/* Arrivée */}
                
    <Grid>
                        <Autocomplete
                    value={voyage}
                   
                    className="selected-second"
                    onChange={(event, value) => setVoyage(value)}
                    options={travel.map((voyage)=>{return (voyage.nom_fr)})}
                    renderInput={(params) => <TextField error {...params} placeholder="Ville D'Arrivée" variant="outlined" helperText={voyageError? "":"Saisir Voyage!"} required />}
                         />
    </Grid> 
   {/* Passager */}

   <Grid>
                        <Autocomplete
                    value={passager}
                    
                    className="selected-second"
                    onChange={(event, value) => setPassager(value)}
                    options={arrayP.map((voyage)=> voyage)}
                    renderInput={(params) => <TextField {...params}  variant="outlined" helperText={passagerError? "":"Saisir Passager!"} placeholder="Passagers" required />}
                         />
    </Grid> 

                {/* Date */}
            
                <DatePicker 
                required
            className="Date-second"
            selected={Dates}
            onChange={date => setDate(date)}
            closeOnScroll={e => e.target === document}
            dateFormat='dd-MM-yyyy'
            minDate={new window.Date()}
            placeholderText="Choisir Date"
            
            />
        <div>{dateError? "":"Saisir Date!"}</div>

            {/* Button */}
       <div> <button className="Search-btn-second" onClick={()=>Callfunc()}>Modifier</button>  </div>  
                </div>
        
           
        </div>
        </section>
        </div>
   
       
    )
}
export default Modifier;