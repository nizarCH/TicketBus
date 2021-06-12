import React, { useState, useEffect } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
const Signup = ({signup,setSignup,setLogin} ) => {
    const handleClose = () => setSignup(false);
  const handleShow = () => setSignup(true);
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [num_tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")
  const [sign, setSign] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

const submit=async(e)=>{
e.preventDefault()
if(password_confirmation==password){
    const response= await fetch('http://localhost:8000/api/register',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            nom, 
            prenom,
            num_tel,
            email,
            password,
            password_confirmation 
        })
    });
    
const content = await response.json()
setSign(true)
setConfirmation(false)

}
else {
    setSign(false)
    setConfirmation(true)
}
}
const Compte=(e)=>{
  e.preventDefault()
  setSignup(false)
  setLogin(true)
}
    return (
        <div>  
  
      <a variant="primary" role="button" onClick={handleShow}>
        S'inscrire
      </a>

      <Modal show={signup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>S'inscrire
          <div>C’est rapide et facile.</div>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <form className="px-4 py-3">
    <div className="form-group">
      <input type="text" className="form-control"  placeholder="Nom" required
      onChange={(e)=>setNom(e.target.value)} />
    </div>
    <div className="form-group">
    <input type="text" className="form-control"  placeholder="Prenom" required
    onChange={(e)=>setPrenom(e.target.value)}/>
    </div>
    <div className="form-group">
    <input type="tel" className="form-control"  placeholder="Num-Tel" required
    onChange={(e)=>setTel(e.target.value)}/>
    </div>
    <div className="form-group">
    <input type="email" className="form-control"  placeholder="email@example.com" required
    onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="form-group">
    <input type="password" className="form-control"  placeholder="Password" required
    onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="form-group">
    <input type="password" className="form-control"  placeholder="Confirmation Password " required
    onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
    <div className="pass-confirm">{confirmation?"le mot de passe ne correspond pas":""}</div>
    </div>
    
    <button type="submit" class="btnlogin" onClick={submit}>Confirm</button>
  {sign? <button type="submit" class="btnlogin" onClick={Compte}>Se Connecter</button>:""} 

    <div className="sign-confirm">{sign?"Merci pour votre inscription!":""}</div>
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

export default Signup
