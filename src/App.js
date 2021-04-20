import './App.css';
import { Main } from './components/Main';
import { Customers } from './components/Customers';
import { WorkService } from './components/WorkService';
import { Team } from './components/Team';
import Menu from './components/Menu/Index'
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu/>
          <Switch>
            <Route path="/" exact>
              <Main/>
            </Route>
            <Route path="/clientes" exact>
              <Customers/>
            </Route>
            <Route path="/servicios" exact>
              <WorkService/>
            </Route>
            <Route path="/nosotros" exact>
              <Team/>
            </Route>
          </Switch>
          {/* {ScrollReveal().reveal('.headline2', { delay: 500, reset: true, desktop: true })} */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
