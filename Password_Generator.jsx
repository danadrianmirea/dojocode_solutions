import React, { useState } from "react";
import "./style.css";

function App() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="password-generator-container">
      <h2>Password Generator</h2>
      <label htmlFor="password-length">Password Length</label>
      <input
        type="number"
        id="password-length"
        data-testid="password-length"
        min="4"
        max="20"
        value={length}
        onChange={e => setLength(e.target.value)}
      />

      <div className="mt-20">
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={e => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
      </div>

      <div className="mt-20">
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={e => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>

      <div className="mt-20 mb-10">
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={e => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>

      <button onClick={generatePassword}>Generate</button>
      <div className="mt-20">
        <input
          type="text"
          data-testid="password-input"
          value={password}
          readOnly
        />
        <button onClick={copyToClipboard} className="ml-10">
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;