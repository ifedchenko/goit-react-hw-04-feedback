import React, { useState } from 'react';

import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const feedbackArrNum = Object.values(state);
    const total = feedbackArrNum.reduce((acc, number) => acc + number, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) {
      const percentage = (state.good / total) * 100;
      return Math.round(percentage);
    }
    return '0';
  };

  const onButtonClick = e => {
    const value = e.target.textContent;
    setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  return (
    <>
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onButtonClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    </>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const feedbackArrNum = Object.values(this.state);
//     const total = feedbackArrNum.reduce((acc, number) => acc + number, 0);
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     if (total) {
//       const percentage = (this.state.good / total) * 100;
//       return Math.round(percentage);
//     }
//     return '0';
//   };

//   onButtonClick = e => {
//     const value = e.target.textContent;
//     this.setState(prevState => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <Container>
//           <Section title={'Please leave feedback'}></Section>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onButtonClick}
//           />
//           <Section title={'Statistics'}>
//             {this.countTotalFeedback() > 0 ? (
//               <Statistics
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={this.countTotalFeedback}
//                 positivePercentage={this.countPositiveFeedbackPercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback"></Notification>
//             )}
//           </Section>
//         </Container>
//       </>
//     );
//   }
// }
