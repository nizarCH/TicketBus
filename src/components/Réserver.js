import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Paiement from './Paiement'
import PaiementGuest from './PaiementGuest'


const Réserver = () => {
    const {voyageId}= useParams()
    const infos=voyageId.split('&')
    const handleClose = () => setLogin(false);
    const handleShow = () => setLogin(true);
    const [email, setEmail] = useState("")
    const [num_tel, setNumtel] = useState("")
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [login, setLogin] = useState(false)
const [complet, setComplet] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayguest, setDisplayguest] = useState(false)
    const [guest, setGest] = useState(false)
    const [userRes, setUserRes] = useState(false)

    const result= localStorage.getItem("user")
    const users=JSON.parse(result)
    const [user, setUser] = useState({
        user:{
          id:"0",nom:"",prenom:"",num_tel:"",email:""
        }
      })
      useEffect(()=>{
        if(users!==null){
            setGest(false)
            setUserRes(true)
       
            setUser(users)
        }
        else{
            setGest(true)
            setUserRes(false)
        
        }
      },[])
  
      const dataGuest={
        num_tel:num_tel,
        email:email,
        nom:nom,
        prenom:prenom
      }
    const dataVille={
        date: infos[0],
        départ: infos[1],
        id:infos[2],
        prix: infos[3],
        nom_fr: infos[4],
        nom_ar: infos[5],
        agence: infos[6],
        psg: infos[7]
      }
    return (
        <div>
    <Navbar/>

 <div className="container">
       
                <div className="reservation container">
       <table>
           <tr>
               <td>
            
            <ul className="ticket">
          <li> <i className="fas fa-map-marker-alt locale-icon"></i> Destination: {dataVille.agence} </li>
          <li> <i className="fas fa-bus bus-icon"></i> Agence :  {dataVille.nom_fr}-{dataVille.nom_ar}   </li>
          <li><i class="fas fa-users"></i> Nombre de passager: {dataVille.psg}  </li>
          <li> <i class="fas fa-tag"></i>Prix Unitaire: {dataVille.prix}DH </li>
          <br></br>
          <li><i class="fas fa-money-bill-wave-alt"></i> Prix Total: {dataVille.prix*dataVille.psg}DH </li>
   
            </ul>
        
               </td>
              
               </tr>
               <tr className={complet?"":"none"}>
                   <td>
                       <h3>Paiement Complet!</h3>
                       <h5>Reserver un autre ticket ? <a href="/"> Acceuil</a></h5>
                   </td>
               </tr>
           <tr className={guest?"":"none"}>
               <td>
                   <p>Votre ticket sera envoyé aux Email et Téléphone ci-dessous:</p>
            <form>
    <label>  <i class="fa fa-phone" aria-hidden="true"></i><span> </span> <input onChange={(e)=>setNumtel(e.target.value)} type="tel"placeholder="num Telephone" required/></label>      
                                    <label> <i class="fa fa-envelope" aria-hidden="true"></i><span> </span><input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email adresse" required/></label><br></br>
                                    <label> <i class="fas fa-pen-square"></i><span> </span><input onChange={(e)=>setNom(e.target.value)} type="text" placeholder="Nom" required /></label>
                                    <label> <i class="fas fa-pen-square"></i><span> </span><input onChange={(e)=>setPrenom(e.target.value)} type="text" placeholder="Prénom" required/></label> <br></br>

            </form>
            <button type="button" className="btn-confirm" onClick={()=> setDisplayguest(true)}>Confirmer et Payer</button>
               </td>
           </tr>
           <div className={userRes?"userRes":"none"}>
           <button type="button" className="btn-confirm" onClick={()=> setDisplay(true)}>Confimer et Payer</button>
           </div>
           
                    </table>
                  
        </div>
            </div>
           
            <Paiement user={user} dataVille={dataVille} total={dataVille.prix * dataVille.psg} display={display} setDisplay={setDisplay} setComplet={setComplet} setUserRes={setUserRes}/> 
            <PaiementGuest dataGuest={dataGuest} displayguest={displayguest} setDisplayguest={setDisplayguest} dataVille={dataVille} total={dataVille.prix * dataVille.psg} setGest={setGest} setComplet={setComplet} guest={guest}/>
        </div>
    )
}

export default Réserver
