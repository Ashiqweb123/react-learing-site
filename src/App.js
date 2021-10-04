import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import Home from './Componants/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './Componants/About/About';
import Service from './Componants/Service/Service';
import Error from './Componants/Error/Error';
import Contact from './Componants/Contact/Contact';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    
      <Route path="/home">
    <Home></Home>
      </Route>
      <Route path="/about">
    <About></About>
      </Route>
      <Route path="/service">
    <Service></Service>
      </Route>
      <Route path="/contact">
    <Contact></Contact>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route>
        <Error></Error>
      </Route>
      
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
