import React, { useState } from "react";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Options from "../../utils/buttonOptions.json";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (evt) => {
    if (evt.target.name === "good") {
      setGood(good + 1);
    }
    if (evt.target.name === "neutral") {
      setNeutral(neutral + 1);
    }
    if (evt.target.name === "bad") {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;

    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = (good * 100) / total;

    if (positive) {
      return `${Math.floor(positive)}%`;
    } else {
      return "";
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={Options} />
      </Section>
      <Section title="Statistics">
        <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          onTotalFeedback={countTotalFeedback()}
          onPositivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
};

export default App;
