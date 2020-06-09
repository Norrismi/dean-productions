import React, { Component } from "react";
import Nav from '../components/nav/nav'
import MessageShow from '../components/messageShow/messageShow'
import api from "./api";

class messageFetch extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    api.get("/submission.json").then((response) => {
      //console.log(response.data);
      let fetchedMsg = [];
      for (let key in response.data) {
        fetchedMsg.unshift({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({ results: fetchedMsg });
    });
  }

  render() {
      //console.log(this.state.results)
     //const {results} = this.state
    return (
      <div className="">
          <Nav/>
     

        {this.state.results.map((result) => (
          <MessageShow
            key={result.id}
            name={result.name}
            phone={result.phone}
            email={result.email}
            message={result.message}
          />
        ))}
      </div>
    );
  }
}

export default messageFetch;
