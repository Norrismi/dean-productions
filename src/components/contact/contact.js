import React, { Component } from "react";
import Nav from "../nav/nav";
import "./contact-style.css";
import api from "../api";

//let emailRegex = RegExp(/[^@]+@[^.]+\..+/);

class Contact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",

    formErrors: {
      email: "",
      phone: "",
      form: [],
    },
  };

  postDataHandler = (e) => {
    e.preventDefault();

    const data = this.state;

    // api.post("/submission.json", data).then(res=>{
    //     console.log(res)
    // })

    this.state.phone && this.state.message
      ? api.post("/submission.json", data).then((res) => {
          console.log(res)
          this.props.history.push("/contactComplete");
        })
      : data.formErrors.form.push("Complete the form");

    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      //   case "email":
      //     formErrors.email = emailRegex.test(value)
      //       ? null
      //       : "Please enter a valid email address";
      //     break;

      case "phone":
        formErrors.phone =
          value.length < 7 ? "minimum 7 characters required" : null;
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    let { formErrors } = this.state;
    return (
      <div>
        <Nav />
        <h3 className="header1">Contact Us...</h3>
        <h3 className="header2">We want to hear from you!</h3>
        <br></br>
        <div className="body">
          Would you need music for a special event or wedding? This is the right
          page for you! Please leave a message describing the event and the
          genre of music you need. We will bend our strings as much as possible
          to meet your needs!
        </div>
        <div className="contact-forms">
          <form id="contact-form" onSubmit={this.postDataHandler}>
            <div className="form-name">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Fist and Last Name"
              />
            </div>
            <div className="form-phone">
              <input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="000-000-0000"
                required
              />
              {formErrors.phone ? <span>{formErrors.phone}</span> : null}
            </div>
            <div className="form-email">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Name@email.com"
                aria-describedby="emailHelp"
              />
              {formErrors.email ? <span>{formErrors.email}</span> : null}
            </div>
            <div className="form-message">
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {formErrors.form ? <span>{formErrors.form[0]}</span> : null}
        </div>
      </div>
    );
  }
}

export default Contact;
