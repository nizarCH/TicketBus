import React, { useState, useEffect }  from 'react'
import {BrowserRouter as Router,Link, Redirect, useHistory} from 'react-router-dom'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
const Profile = ({profile,setProfile,user}) => {
    const handleClose = () => setProfile(false);
    const handleShow = () => setProfile(true);
    const history=useHistory()
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [num_tel, setTel] = useState("")
    const [email, setEmail] = useState("")


    return (
        <div>
            <a variant="primary" role="button" onClick={handleShow}>
        PROFILE
      </a>

     <Modal show={profile} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenue!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="px-4 py-3">
    <div className="form-group">
      <input type="text" className="form-control"  placeholder="Nom" required
      onChange={(e)=>setNom(e.target.value)} value={user.user.nom}/>
    </div>
    <div className="form-group">
    <input type="text" className="form-control"  placeholder="Prenom" required
    onChange={(e)=>setPrenom(e.target.value)} value={user.user.prenom}/>
    </div>
    <div className="form-group">
    <input type="tel" className="form-control"  placeholder="Num-Tel" required
    onChange={(e)=>setTel(e.target.value)} value={user.user.num_tel}/>
    </div>
    <div className="form-group">
    <input type="email" className="form-control"  placeholder="email@example.com" required
    onChange={(e)=>setEmail(e.target.value)} value={user.user.email}/>
    </div>
  
 
  </form>


        </Modal.Body>
        <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )

}

export default Profile
