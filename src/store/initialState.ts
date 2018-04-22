import { AnswerType } from "../types";

export default {
  answers: [{
    key: 'customer-service',
    value: 'somewhat-unsatisfactory'
  }],
  currentIndex: 0,
  questions: [
    {
      answerType: AnswerType.Radio,
      index: 0,
      key: 'customer-service',
      options: [
        {
          key: 'superior',
          text: 'Superior',
        },
        {
          key: 'very-satisfactory',
          text: 'Very Satisfactory',
        },
        {
          key: 'about-average',
          text: 'About Average',
        },
        {
          key: 'somewhat-unsatisfactory',
          text: 'Somewhat Unsatisfactory',
        },
        {
          key: 'very-poor',
          text: 'Very Poor',
        }
      ],
      text: 'In thinking about your most recent experience with Initech, how was the quality of customer service you received?',
    },
    {
      answerType: AnswerType.Radio,
      index: 0,
      key: 'concern-resolution',
      options: [
        {
          key: 'very-unsatisfactory',
          text: 'Very Unsatisfactory',
        },
        {
          key: 'somewhat-satisfactory',
          text: 'Somewhat Satisfactory',
        },
        {
          key: 'about-average',
          text: 'About Average',
        },
        {
          key: 'somewhat-satisfactory',
          text: 'Somewhat Satisfactory',
        },
        {
          key: 'very-satisfactory',
          text: 'Very Satisfactory',
        },
      ],
      text: 'The process for getting your concerns resolved was:',
    },
  ]
};
