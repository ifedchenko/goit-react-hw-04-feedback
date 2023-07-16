import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonItem = options.map((option, index) => (
    <Button key={index} type="button" onClick={onLeaveFeedback}>
      {option}
    </Button>
  ));
  return <ButtonList>{buttonItem}</ButtonList>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
