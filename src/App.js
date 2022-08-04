import './App.css';
import Nav from "./components/nav/Nav";
import Body from "./components/body/Body";
import Partners from './components/pool/Partners';
import Staking from './components/staking/Staking';
import Buybas from './components/buybas/Buybas';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (

    <Router>
      
        <Switch>

              <Route exact path="/">
                <Body className="Body" />
              </Route>

              <Route  path="/partners">
                <Partners className="Pool" />
              </Route>

              <Route  path="/about">
                <Staking className="Staking" />
              </Route>

              <Route  path="/buying">
                <Buybas className="Buybas" />
              </Route>

        </Switch>
        
    </Router>

  );
}

export default App;
