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

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('implement cocktail list..');
    }
  };

  
  return (
    <div className='app'>
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {false ? (
        <div className='score-section'>You scored 1 out of {questions.length}</div>
      ) : (
          <>
            <div className='question-section'>

            <div className='question-text'>{questions[currentQuestion].questionText}</div>            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button onClick={() => handleAnswerButtonClick()}>{answerOption.answerText}</button>              ))}
            </div>
          </>
        )}
    </div>
  );
}
