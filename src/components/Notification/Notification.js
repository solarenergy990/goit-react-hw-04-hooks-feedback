import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div className="notification">{message.trim() && <p>{message}</p>}</div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
