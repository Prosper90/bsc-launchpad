import './App.css';
import Nav from "./components/nav/Nav";
import Body from "./components/body/Body";
import Pool from './components/pool/Pool';
import Staking from './components/staking/Staking';
import Buybas from './components/buybas/Buybas';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='main'>
       <Nav className="App" />

       <Switch>
         <Route exact path="/">
           <Body className="Body" />
         </Route>

         <Route  path="/pool">
           <Pool className="Pool" />
         </Route>

         <Route  path="/staking">
           <Staking className="Staking" />
         </Route>

         <Route  path="/buying">
           <Buybas className="Buybas" />
         </Route>
     
       </Switch>

     </div>
    </Router>
  );
}

export default App;
