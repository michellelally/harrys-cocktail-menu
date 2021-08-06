import React, { useState } from 'react';
import Cocktails from './Cocktails';

function Picker() {

  const [arr, setArr] = useState([]);

  const questions = [
    {
      questionText: 'PICK YOUR POISON',
      answerOptions: [
        { answerText: 'Vodka' },
        { answerText: 'Whiskey' },
        { answerText: 'Gin' },
        { answerText: 'Rum' },
        { answerText: 'Other' },
      ],
    },
    {
      questionText: 'PICK YOUR FLAVOUR',
      answerOptions: [
        { answerText: 'Sweet' },
        { answerText: 'Boozy' },
        { answerText: 'Sour' },
        { answerText: 'Refreshing' },
        { answerText: 'All' },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setComplete(true);
    }
  };

  const handleValue = (e) => {
    const value = e.target.value
    setArr((oldArray) => oldArray.concat(value))
  }

  return (
    <div className='container'>
      <div className='app'>
        {complete ? (
          <div className="center">
            <Cocktails message={arr} />
          </div>
        ) : (
            <>
              <div className='question-section'>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    className="button"
                    value={answerOption.answerText}
                    onClick={e => {
                      handleValue(e);
                      handleAnswerButtonClick(e);
                    }}>
                    {answerOption.answerText}</button>))}
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default Picker;