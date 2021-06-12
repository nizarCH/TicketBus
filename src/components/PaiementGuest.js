import React, { useState, useEffect } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
const PaiementGuest = ({total,displayguest,setDisplayguest,dataGuest,setGest,setComplet,guest}) => {
    const handleClose = () => setDisplayguest(false);
    const handleShow = () => setDisplayguest(true);

const [voyage_id, setIdvoyage] = useState("")
const [guest_id, setGuestid] = useState("")
const [nombre_de_passagers, setPsg] = useState("")
const [date_reservation, setDate] = useState("")


const [Confirm, setConfirm] = useState(false)
const [email, setEmail] = useState(dataGuest.email)
const [num_tel, setNumtel] = useState(dataGuest.num_tel)
const [nom, setNom] = useState(dataGuest.nom)
const [prenom, setPrenom] = useState(dataGuest.prenom)

useEffect(()=>{
    setEmail(dataGuest.email)
    setNumtel(dataGuest.num_tel)
    setNom(dataGuest.nom)
    setPrenom(dataGuest.prenom)

},[Confirm])

// const submit=async(e)=>{
//     e.preventDefault()
//         const response= await fetch('http://localhost:8000/api/reserver',{
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body:JSON.stringify({
//                 voyage_id,
//                 guest_id,
//                 nombre_de_passagers,
//                 date_reservation
//             }) 
//         });
//     const content = await response.json();

//     } 



const ConfirmNon= ()=>{
    setConfirm(false)
}

const Guest=async(e)=>{
    e.preventDefault()
    const response= await fetch('http://localhost:8000/api/createGuest',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
            nom,
            prenom,
            num_tel,
            email
        }) 
    });
// const content = await response.json();
  // submit()
handleClose()
setGest(false)
setComplet(true)
setConfirm(false)
}

const GuestSubmit=(e)=>{
    e.preventDefault()
    setConfirm(true)
}


    return (
        <div>
            <Modal show={displayguest} onHide={handleClose}>
            <div className="container paiement">
    <div>
        <div className="col-md-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Paiement Visiteur
                    </h3>

                </div>
                <div className="panel-body">
                    <form role="form">
                    <div className="form-group">
                        <label htmlfor="cardNumber">
                            CARD NUMBER</label>
                        <div className="input-group">
                            <input type="text"  id="cardNumber" placeholder="Valid Card Number"
                                required autofocus />
                            <span className="input-group-addon"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-7 col-md-7">
                            <div className="form-group">
                                <label htmlfor="expityMonth">
                                    EXPIRY DATE</label>
                                <div >
                                    <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                </div>
                                <div>
                                    <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div>
                            </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                            <div className="form-group">
                                <label htmlfor="cvCode">
                                    CV CODE</label>
                                <input type="password" id="cvCode" placeholder="CV" required />
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <ul className="nav nav-pills nav-stacked">
                <li className="active"><div href="#"><span class="badge pull-right"><span className="glyphicon glyphicon-usd"></span></span>A Payer: {total}DH </div>
                </li>
            </ul>
            <br/>
            <button className="btn-confirm" role="button" onClick={GuestSubmit}>ConfimerPaiment</button>
            <div className={Confirm?"":"none"}>
        <p>Vous êtes sûr du paiement?</p>
        <button role="button" className="btn-confirm" onClick={Guest}>Oui</button><br/><br/> <button role="button" className="btn-confirm" onClick={()=>ConfirmNon()}>Non</button>
       </div>
        </div>
    </div>
</div>
    <Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button> 
        </Modal.Footer>
</Modal>
        
        </div>
        
    )
}

export default PaiementGuest
