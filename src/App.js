import React from "react";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Testimonials from "./components/testimonials/Testimonials";
import contactComplete from "./components/contact-complete/contact-complete";
import MessageShow from "./components/messageShow/messageShow";
import MessageFetch from "./components/messageFetch";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Contact</Link>
      <Link to="/testimonials">Testimonials</Link> */}

      <Switch>
        <Route path="/messageFetch" component={MessageFetch} />
        <Route path="/messageShow" component={MessageShow} />
        <Route path="/contact" component={Contact} />
        <Route path="/contactComplete" component={contactComplete} />
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
