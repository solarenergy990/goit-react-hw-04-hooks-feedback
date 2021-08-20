import React from "react";
import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotalFeedback,
  onPositivePercentage,
}) => {
  return (
    <>
      {onTotalFeedback !== 0 ? (
        <ul className="list">
          <li>Good: {onGood}</li>
          <li>Neutral: {onNeutral}</li>
          <li>Bad: {onBad}</li>
          <li>Total: {onTotalFeedback}</li>
          <li>Positive feedback: {onPositivePercentage}</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotalFeedback: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.string.isRequired,
};
