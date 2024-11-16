import "./style.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState(""); // Track the input name
  const [participants, setParticipants] = useState([]); // List of participants
  const [drawnName, setDrawnName] = useState(null); // Store the drawn name

  const handleInputChange = event => {
    setName(event.target.value);
  };

  const handleAddName = () => {
    if (name && !participants.includes(name)) {
      setParticipants([...participants, name]);
      setName(""); // Clear input after adding
    }
  };

  const handleDrawName = () => {
    if (participants.length >= 2) {
      let newDrawnName;
      do {
        const randomIndex = Math.floor(Math.random() * participants.length);
        newDrawnName = participants[randomIndex];
      } while (newDrawnName === drawnName); // Keep drawing until we get a different name

      setDrawnName(newDrawnName);
    }
  };

  const handleRemoveName = nameToRemove => {
    setParticipants(
      participants.filter(participant => participant !== nameToRemove),
    );
    if (drawnName === nameToRemove) {
      setDrawnName(null); // Reset drawn name if it's removed
    }
  };

  return (
    <div>
      <h1>Gift Exchange Draw</h1>

      <div className="adder">
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter name"
          className="input"
        />
        <button onClick={handleAddName} className="add">
          Add
        </button>
      </div>

      <div>
        <button
          onClick={handleDrawName}
          className="draw"
          disabled={participants.length < 2}>
          Draw a Name
        </button>
      </div>

      {drawnName && <p>{drawnName} has been drawn!</p>}

      <ul>
        {participants.map((participant, index) => (
          <li
            key={index}
            onClick={() => handleRemoveName(participant)}
            className="participant">
            {participant}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;