import React, { useState, useEffect }  from 'react'
import {BrowserRouter as Router,Link, Redirect, useHistory} from 'react-router-dom'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
const Login = ({login, setLogin, setInLog,setAdmin,setSignup}) => {
  const handleClose = () => setLogin(false);
  const handleShow = () => setLogin(true);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [sign, setSign] = useState(false)

  const submit=async(e)=>{
    e.preventDefault()
        const response= await fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
      
            body: JSON.stringify({
                email,
                password,
            })
        });
    const content = await response.json();
    window.location.reload();
    if(content.message=="bad creds"){
      setSign(true)
    }
 else{
    localStorage.setItem("user",JSON.stringify(content));
      setSign(false);
      setLogin(false);
      setInLog(true);
    }
    } 

const Compte=(e)=>{
  e.preventDefault()
  setSignup(true)
  setLogin(false)
}


    return (
        <div>  
  
      <a variant="primary" role="button" onClick={handleShow}>
        SE CONNECTER
      </a>

      <Modal show={login} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenue!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="px-4 py-3">
    <div className="form-group">
      <label htmlFor="exampleDropdownFormEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"
      onChange={(e)=>setEmail(e.target.value)} required/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleDropdownFormPassword1">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" 
      placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
    </div>
  
  <button type="submit" class="btnlogin" onClick={submit}>Se Connecter</button>
    <div className="sign-confirm">{sign?"Mot de passe ou Email est Incorrect":""}</div>
  </form>


        </Modal.Body>
        <Modal.Footer>
  <a className="dropdown-item" onClick={Compte}>Créer un compte</a>
  <a className="dropdown-item" >Mot de passe oublié?</a>
<Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
        </Modal.Footer>
      </Modal>

</div>
    )
}

export default Login
