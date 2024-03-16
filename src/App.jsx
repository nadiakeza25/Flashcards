import { useState } from "react";
import "./App.css";
import FlashCards from "./assets/FlashCardszz.jsx";
import SAMPLE_FLASHCARDS from "./Flashcards.js";
import { useRef } from "react";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const Container = useRef();

  const clickIt = () => {
    Container.current.scrollLeft +=  300;
  };

  return (
    <div className="App">
      <div className="header">
        <h1 style={{ color: "Blue" }}>
          Muraho! Welcome To Learning Kinyrawnda 101!
        </h1>
        <h2 style={{ color: "Yellow" }}>
          In this lesson we're gonna learn the basics in Kinyarwanda
        </h2>
        <button className="nxt" onClick={clickIt}>
          Next
        </button>
        <div className="answer" style={{ color: "Whitesmoke" }}>
          Type your answer here:
          <input
            type="text"
            name="answer"
            placeholder="Place your answer here.."
            class
            value
          ></input>
          <button type="Submit" class="submit-button">
            Submit Guess
          </button>
        </div>
        <div className="Containers" ref={Container}>
          {flashcards.map(({ questions, Answer }) => {
            return <FlashCards question={questions} answer={Answer} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
