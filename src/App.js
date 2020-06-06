import React from "react";
import Nav from './components/nav/nav'
import Contact from './components/contact/contact'
import Home from './components/home/home'
import Testimonials from './components/testimonials/testimonials'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Contact</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact" component={Contact}/>
          
   
          <Route path="/testimonials" component={Testimonials}/>
       
      
          <Route path="/" component={Home}/>
        
      
        </Switch>
      </div>
    </Router>
  );
}

// function home() {
//   return <h2>Home</h2>;
// }

function contact() {
  return <h2>contact</h2>;
}

function testimonials() {
  return <h2>testimonials</h2>;
}

export default App