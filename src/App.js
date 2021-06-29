import React, { useState } from 'react';
import Footer from './components/Footer';

export default function App() {

  const picked = [2];

  const questions = [
    {
      questionText: 'PICK YOUR POISON',
      answerOptions: [
        { answerText: 'VODKA' },
        { answerText: 'WHISKEY' },
        { answerText: 'GIN' },
        { answerText: 'OTHER' },
      ],
    },
    {
      questionText: 'PICK YOUR FLAVOUR',
      answerOptions: [
        { answerText: 'SWEET' },
        { answerText: 'BOOZY' },
        { answerText: 'SOUR' },
        { answerText: 'REFRESHING' },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('implement cocktail lists');
    }
  };

  const handleValue = (e) => {
    alert(e.target.value);
    picked.push(e.target.value)
    alert(picked[0].value)
  }

  return (
    <div className='app'>
      
      <div className='question-section'>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button 
            value={answerOption.answerText} 
            onClick={e => {
              handleValue(e);
              handleAnswerButtonClick(e);
            }}>
              {answerOption.answerText}</button>))}
      </div>
      <Footer />
    </div>
  );
}
