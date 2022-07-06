import React from 'react';

import Section from './components/Feedback/Section';
import Notification from './components/Feedback/Notification';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setVote = vote => {
    this.setState(prevState => {
      return {
        [vote]: prevState[vote] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0
    } else {
      return Math.round((good / total) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.setVote}
        ></FeedbackOptions>
        </Section>
      <Section title="Statistics">
        {!Boolean(total) && <Notification message="There is no feedback"></Notification>}
        {Boolean(total) && <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>}
        </Section>
        </>
    );
  }
}

export default App;
