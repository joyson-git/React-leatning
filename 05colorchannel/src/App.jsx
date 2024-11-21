import React, { useState } from 'react';
import './index.css';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('olive'); // Correct state initialization

  // Function to change background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => changeColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => changeColor('yellow')}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => changeColor('green')}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
