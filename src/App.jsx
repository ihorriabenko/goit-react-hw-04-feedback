import { useState } from 'react';

import Section from './components/Feedback/Section';
import Notification from './components/Feedback/Notification';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const setVote = vote => {
    setVotes(prevState => ({
      ...prevState,
      [vote]: prevState[vote] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return votes.good + votes.neutral + votes.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    } else {
      return Math.round((votes.good / total) * 100);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(votes)}
          onLeaveFeedback={setVote}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {!Boolean(countTotalFeedback()) && (
          <Notification message="There is no feedback"></Notification>
        )}
        {Boolean(countTotalFeedback()) && (
          <Statistics
            good={votes.good}
            neutral={votes.neutral}
            bad={votes.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </>
  );
};

export default App;
