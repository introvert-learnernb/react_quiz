import './App.css'
import { useState } from 'react'
import QuizScreen from './components/QuizScreen'
import JoinScreen from './components/JoinScreen'
import Navbar from './components/Navbar'


function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
    <Navbar/>
    <div className="quiz_container">
      { 
        isQuizStarted ? (
          <QuizScreen retry={()=>setIsQuizStarted(false)}/>
        ): (
          <JoinScreen start={()=>setIsQuizStarted(true)}/>
        )
      }
    </div>
      
    </>
  )
}

export default App
