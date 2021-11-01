import React, { useState } from 'react';
import Cocktails from './Cocktails';

// this is what is used to get the information from the user on what their drink preferences are
// i followed this tutorial and used code from here to create this component:
// https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/ 
function Picker() {

  // variables
  const [arr, setArr] = useState([]);

  // array of questions
  // this stores the different types of alcohol and flavour descriptions that the user can choose from
  const questions = [
    {
      // the heading
      questionText: 'PICK YOUR POISON',
      answerOptions: [
        // the options
        { answerText: 'Vodka' },
        { answerText: 'Whiskey' },
        { answerText: 'Gin' },
        { answerText: 'Rum' },
        { answerText: 'Tequila' },
        { answerText: 'Other' },
      ],
    },
    {
      // the heading
      questionText: 'PICK YOUR FLAVOUR',
      answerOptions: [
        // the options
        { answerText: 'Sweet' },
        { answerText: 'Boozy' },
        { answerText: 'Sour' },
        { answerText: 'Refreshing' },
        { answerText: 'Spicy' },
        { answerText: 'All' },
      ],
    },
  ];

  // stores the questions
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // used for knowing when the user has made their choices
  const [complete, setComplete] = useState(false);

  // i got this function from the tutorial mentioned above
  // it is called when the user clicks a button to display the next set of choices
  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    // checking if it has reached the end of the questions
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setComplete(true);
    }
  };

  // this is for storing the choices the user picked to an array to be passed to the cocktail component
  const handleValue = (e) => {
    const value = e.target.value
    setArr((oldArray) => oldArray.concat(value))
  }

  return (
    <div className='container'>
      <div className='app'>
        {/* if complete is true */}
        {complete ? (
          // display a Cocktails component
          <div className="center">
            <Cocktails message={arr} />
          </div>
        ) : (
          // if complete is false
            <>
              <div className='question-section'>
                {/* displaying the question text based on the index of object array */}
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {/* displaying each of the answerOptions for the specific question */}
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <div key={answerOption.index}>
                    {/* creating a button for each of the options */}
                    <button
                      className="button"
                      value={answerOption.answerText}
                      onClick={e => {
                        handleValue(e);
                        handleAnswerButtonClick(e);
                      }}>
                      {answerOption.answerText}</button>
                  </div>
                ))}
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default Picker;