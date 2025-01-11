import React from "react";

function JoinScreen({start}) {
  return (
    <div className="join-screen">
      <h2>Lets Join the Awesome Quiz.</h2>
      <p>
        Dive into the Great world of Quiz .... Get Ready to test your limits
      </p>
      <button onClick={start} className="start-btn">
        Start Quiz
      </button>
    </div>
  );
}

export default JoinScreen;
