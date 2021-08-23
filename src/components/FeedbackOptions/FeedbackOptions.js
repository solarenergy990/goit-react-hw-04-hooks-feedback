import React from "react";
import PropTypes from "prop-types";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

import s from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  // console.log(options);
  return (
    <>
      {options.map((option) => {
        return (
          <button
            type="button"
            key={option.id}
            name={option.label}
            className={s.button}
            onClick={onLeaveFeedback}
            data-value={option.value}
          >
            {capitalizeFirstLetter(option.value)}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
