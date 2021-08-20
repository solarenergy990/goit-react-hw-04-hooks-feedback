import React from "react";
import PropTypes from "prop-types";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

import s from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <button
            type="button"
            key={option}
            name={option}
            className={s.button}
            onClick={onLeaveFeedback}
            data-value={option}
          >
            {capitalizeFirstLetter(option)}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
