import React from 'react'
import { useState } from 'react';
import QuestionList from '../../public/questions.json'
import QuizResult from './QuizResult';
import Question from './Question';

function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length)); 
  //assigns an array of length equal to the number of questions to markedAnswers [each having value undefined]
  
  const isQuestionEnd = currentQuestionIndex === QuestionList.length - 1;

  function calculateResult(){
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if(question.correctoption == markedAnswers[index]){
        correct++;
      }      
  });
  return ({
    total: QuestionList.length,
    correct : correct,
    percentage : Math.trunc((correct/QuestionList.length)*100)
  });
  }


  
  return (
    <div className='quiz-screen'>
      {
        isQuestionEnd ? (
          <QuizResult 
            result = {calculateResult()}
            retry = {retry}
          />
        ):
         (<Question 
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex}
          setAnswer={(index) => {
              setMarkedAnswers((arr) => {
                  let newArr = [...arr];
                  newArr[currentQuestionIndex] = index;
                  return newArr;
              });
              // Navigate to the next question only if it's not the last one
              setCurrentQuestionIndex((prevIndex) =>
                  prevIndex < QuestionList.length - 1 ? prevIndex + 1 : prevIndex
              );
          }}
      />      
      )
      }
    </div>
  )
}

export default QuizScreen
