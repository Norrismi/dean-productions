import React from "react";
import Nav from "./components/nav/nav";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Testimonials from "./components/testimonials/Testimonials";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Contact</Link>
      <Link to="/testimonials">Testimonials</Link> */}

      <Nav />

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function contact() {
//   return <h2>contact</h2>;
// }

// function testimonials() {
//   return <h2>testimonials</h2>;
// }

export default App;
