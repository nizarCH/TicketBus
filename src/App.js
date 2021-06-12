import React,{useState} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route,Switch,Link,Redirect} from 'react-router-dom'
import Mainpage from './components/Mainpage'
import Secondpage from './components/Secondpage'
import Réserver from './components/Réserver'
import Paiement from './components/Paiement'
import Admin from './components/Admin'
function App() {
  return (
<div>
<Navbar/>
  <Router>
    <Switch>
    <Route exact path="/" component={Mainpage}/> 
    <Route exact path="/Recherche/:villeId" component={Secondpage}/>
    <Route exact path="/Réserver/:voyageId" component={Réserver}/>
    <Route path="/Admin" component={Admin}/>
    <Route>404 Not Found!</Route>
    </Switch>
 
  </Router>

</div>
  );
}

export default App;
