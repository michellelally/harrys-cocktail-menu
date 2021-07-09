import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Picker() {

  const picked = [];

  const questions = [
    {
      questionText: 'PICK YOUR POISON',
      answerOptions: [
        { answerText: 'VODKA' },
        { answerText: 'WHISKEY' },
        { answerText: 'GIN' },
        { answerText: 'RUM' },
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
    picked.push(value)
    alert(picked[0])
  }

  return (
    <div className='wrapper'>
      <div className='app'>
        {complete ? (
          <div>
            <button>
              <Link class="nav-link" to="cocktails">
                FIND MY COCKTAIL!
                  <span class="sr-only">(current)</span>
              </Link>
            </button>
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