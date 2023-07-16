import React, { Component } from 'react';

import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const feedbackArrNum = Object.values(this.state);
    const total = feedbackArrNum.reduce((acc, number) => acc + number, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total) {
      const percentage = (this.state.good / total) * 100;
      return Math.round(percentage);
    }
    return '0';
  };

  onButtonClick = e => {
    const value = e.target.textContent;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <>
        <Container>
          <Section title={'Please leave feedback'}></Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
          <Section title={'Statistics'}>
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </Container>
      </>
    );
  }
}
