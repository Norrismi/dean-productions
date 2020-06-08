import React, { Component } from "react";
import "./cc-styles.css";
import Nav from "../nav/nav";

class ContactComplete extends Component {

  state = {
    minutes: 0,
    seconds: 10,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } 
        // else {
        //   this.setState(({ minutes }) => ({
        //     minutes: minutes - 1,
        //     seconds: 59,
        //   }));
        // }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <Nav />
        <div className="container">
          <h3 className="message">Success!</h3>
          <div className="body">
            {minutes === 0 && seconds === 0 ? (
              this.props.history.push("/")
            ) : (
              <div>
                Thank you, your message has been successfully submitted! We will
                contact you shortly. You will be redirected back to the home
                page in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactComplete;
