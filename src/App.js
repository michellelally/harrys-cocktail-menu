import React, { useState } from 'react';

export default function App() {
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

  const handleAnswerButtonClick = (answerOption, el) => {
    
    alert("value: ", el.target.value)

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('implement cocktail lists');
    }
  };

  return (
    <div className='app'>
      <div className='question-section'>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button value={"example"} onClick={() => handleAnswerButtonClick()}  >{answerOption.answerText}</button>))}   
      </div>
    </div>
  );
}
