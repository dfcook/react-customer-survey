import { AnswerType } from "../types";

export default {
  answers: [{
    key: 'age',
    value: '35To49'
  }],
  questions: [
    {
      answerType: AnswerType.Select,
      helpText: 'How old are you?',
      index: 0,
      key: 'age',
      options: [
        {
          key: '18To34',
          text: '18 to 34',
        },
        {
          key: '35To49',
          text: '35 to 49',
        },
        {
          key: '50To64',
          text: '50 to 64',
        }
      ],
      text: 'What is your age band?',
    },
  ]
};
