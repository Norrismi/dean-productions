import React from "react";
//import Nav from "../nav/nav";

const messageShow = (props) => (
  <div>
    <br />
    <strong>Name:</strong>
    {props.name}
    <br />
    <br />
    <strong>Phone: </strong> {props.phone}
    <br />
    <br />
    <strong> Email:</strong> {props.email}
    <br />
    <br />
    <strong>Message:</strong> {props.message}
    <br />
    <br />
    <hr />
  </div>
);

export default messageShow;
