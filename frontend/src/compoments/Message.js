import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, text, errorReset }) => {
  return (
    <Alert className="message" onClick={errorReset} variant={variant}>
      {text}
    </Alert>
  );
};

export default Message;
