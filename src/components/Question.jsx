import React from 'react'
import {useState,useEffect, useRef} from 'react'
import { flushSync } from 'react-dom'
import './Question.css'

function Question({question, totalQuestions, currentQuestion, setAnswer}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const Timer = useRef(null);
    const progressBar = useRef(null);

    function gotoNextQuestion(){
        if(Timer.current){
            clearTimeout(Timer.current);
        }
        //flushSync ensures that the state is updated synchronously (immediately)
        flushSync(()=>{
            setAnswer(selectedOption);
        });
        setSelectedOption(null);
    }

    useEffect(()=>{
        progressBar.current.classList.remove("active");
        setTimeout(()=>{
            progressBar.current.classList.add("active");
    
        },0);
        Timer.current = setTimeout(gotoNextQuestion, 10000);
        return () => {
            // Cleanup the timeout when the component is unmounted or question changes
            if (Timer.current) {
              clearTimeout(Timer.current);
            }
     }
    },[question]);
  
  return (
    <div className='question'>
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{currentQuestion+1} </b>
        of
        <b> {totalQuestions}</b>
      </div>
      <div className="main">
        <div className="title">
            <p>{question.title}</p>
        </div>
        <div className="options">
            {
                question.options.map((option,index)=>{
                    return(
                        <div
                        className={index == selectedOption ? "option active" : "option"}
                        key = {index}
                        onClick = {()=>setSelectedOption(index)}
                        >
                            {option}
                        </div>
                    );
                })
            }
        </div>
      </div>
      <div className="control">
        <button onClick={gotoNextQuestion} className="next-btn">Next</button>
      </div>
    </div>
  )
}

export default Question
