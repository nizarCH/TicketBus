import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { selectedVoyage, removeselectedVoyage } from '../redux/actions/voyagesActions'
import {BrowserRouter as Router, Route,Switch,Link,Redirect,useHistory} from 'react-router-dom'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import Loading from '../components/Loading'
import Modifier from './Modifier'
import Notfound from './Notfound'
import Footer from '../components/Footer'


const Secondpage = () => {

    const [loading, setLoading] = useState(true)

    const {villeId}= useParams()
    const dispatch= useDispatch()
    const voyage = useSelector(state => state.voyage.destination)
   

  localStorage.setItem("voyage",JSON.stringify(voyage))
  const Villes= localStorage.getItem("voyage")
  const voyageVille=JSON.parse(Villes)
  const [travel, setTravel] = useState(voyageVille)
  const travels=villeId.split('&')
  
  const dataVille={
    id:travels[0],
    nom_fr: travels[2],
    nom_ar:travels[1],
    prix: travels[4],
    date: travels[3],
    psg: travels[5]
  }
  
     const url = `http://localhost:8000/api/voyage/search/${dataVille.id}`

    const fetchVoyages = async () => {
        try {
          const response = await fetch(url)
          const ligne = await response.json()
          dispatch(selectedVoyage(ligne))
          setLoading(false);
        
        } catch (error) {
          console.log(error)
          setLoading(false);
        }
     
     
      }

      useEffect(() => {
       fetchVoyages();
      },[villeId])

      if(loading){
        return(
          <main>
            <Loading />
          </main>
        )
      }
      if(voyageVille[0]==undefined){

      return (
        <div className="secondpage">
        <div className="Modifier"> <Modifier/></div>
        <div><h4 className="title-voyage">Votre voyage de Tanger à {dataVille.nom_fr}</h4></div>
        <Notfound/>
    </div>
    )  
      }
return (
  

        <div className="secondpage">
         <div className="Modifier"> <Modifier/></div>
         <div><h4 className="title-voyage">Votre voyage de Tanger à {dataVille.nom_fr}</h4></div>
              <table className="container">
    <tr>
<td>
{}
    
    {voyageVille.map((voyage)=>
    {
const {id,titre,depart,nom_fr,nom_ar,ligne_fr,ligne_ar,prix,path}=voyage


    return(        
        <div className="voyage container font-weight-bold">
    <table className="allvoyages">
      <thead>
        <td className="transport">
          <img src={path} className="bus-img"/> <span>{nom_fr}-{nom_ar}</span>
        </td>
        <td className="ligne">
        <i className="fas fa-bus bus-icon"></i> <span>{titre}</span>
        </td>
        <td className="locale">
         <span><i className="fas fa-map-marker-alt locale-icon"></i>{ligne_fr}</span> <div><i className="fas fa-map-marker-alt locale-icon"></i>{ligne_ar}</div>
        </td>
        <td>
        <i class="fas fa-clock"></i>  <span>{depart}</span>
        </td>
        <td>
        <i class="fas fa-coins"></i>  <span>{dataVille.prix} DH</span>
        </td>
        <td style={{width:"20px"}}>
          <Link to={`/Réserver/${dataVille.date}&${depart}&${id}&${dataVille.prix}&${nom_fr}&${nom_ar}&${titre}&${dataVille.psg}`}><button className="btn-reserver">Réserver</button></Link>

        </td>
      </thead>
    </table>
        </div>
    )})}
      </td>
     </tr>
      </table>
      <Footer/> 
       </div>
     
    )
    
}

export default Secondpage
