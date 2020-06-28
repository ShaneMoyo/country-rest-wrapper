import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
} from 'react-router-dom'; 

import Countries from './components/Countries'

function Home() { 
  return (
    <section>
      <h1>Country Info App</h1> 
    </section>
  );
}

function About() { 
  return (
    <section>
      <h1>About</h1> 
      <p> In this app you can search for a country and recieve information.</p>
    </section>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/country">Country Info</Link>
        </nav> 
        <Switch>
          <Route path="/country" component={Countries}/>
          <Route path="/about" render={() => <About/>}/>
          <Route path="/" render={() => <Home/>}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
