import React, { useState } from "react";
import RwandaResorts from '../RwandaResorts.jpg';

export default function Flashcard({ question,answer,Options }) {
  const [flip, setFlip] = useState(false);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>
            {question}
          </h1>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
