import React, { useState } from 'react';
import Cocktails from './Cocktails';

function Picker() {

  const [arr, setArr] = useState([]);

  const questions = [
    {
      questionText: 'PICK YOUR POISON',
      answerOptions: [
        { answerText: 'VODKA ' },
        { answerText: 'WHISKEY ' },
        { answerText: 'GIN ' },
        { answerText: 'RUM ' },
        { answerText: 'OTHER ' },
      ],
    },
    {
      questionText: 'PICK YOUR FLAVOUR',
      answerOptions: [
        { answerText: 'SWEET' },
        { answerText: 'BOOZY' },
        { answerText: 'SOUR' },
        { answerText: 'REFRESHING' },
        { answerText: 'ALL' },
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
    <div className='wrapper'>
      <div className='app'>
        {complete ? (
          <div>
            <Cocktails message={arr}/>
          </div>
        ) : (
            <>
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
            </>
          )}
      </div>
    </div>
  );
}

export default Picker;