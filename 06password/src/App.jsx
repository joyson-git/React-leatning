import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let characters = '';
    if (charAllowed) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) characters += '0123456789';
    if (!characters) return;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 mb-3 bg-white text-black rounded"
        placeholder="Password"
        readOnly
      />
      <div className="flex items-center justify-between bg-blue-700 text-white px-3 py-2 rounded-lg mb-3">
        <button
          className="outline-none py-1 px-4 bg-orange-500 text-white rounded hover:bg-orange-600"
          onClick={() => navigator.clipboard.writeText(password)}
        >
          Copy
        </button>
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <span className="text-white">{length}</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="flex items-center gap-x-2 text-white">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />
          Include Numbers
        </label>
        <label className="flex items-center gap-x-2 text-white">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
          Include Characters
        </label>
      </div>
      <button
        className="w-full mt-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
