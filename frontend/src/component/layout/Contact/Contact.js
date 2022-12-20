import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:www.jjaannuu.com@gmail.com">
        <Button>Contact: naushadalam2040@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
