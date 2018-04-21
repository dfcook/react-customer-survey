import * as React from 'react';
import './App.css';
import SelectQuestion from './components/SelectQuestion';
import { IAnswer, IQuestion, ISelectQuestion} from './types';

interface IAppProps {
  answers: IAnswer[];
  questions: IQuestion[];
  updateAnswer: (answer: IAnswer) => void;
}

const App = ({questions, answers, updateAnswer}: IAppProps) => {
  const selects = questions && questions.map(q => {
    const answer = answers.find(a => a.key === q.key) || { value: '' };
    return <SelectQuestion
      key={q.key}
      updateAnswer={updateAnswer}
      question={q as ISelectQuestion}
      answer={answer.value} />
  });

  return (
    <div className="App">
      <div className="title">Customer Satisfaction Survey</div>
      <div className="questions-container">
        {selects}
      </div>
      <div className="footer">
        1 of 1 questions
      </div>
    </div>
  );
}

export default App;
