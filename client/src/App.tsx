import './App.css';

import { PlayerDiv } from './PlayerDiv';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="h-screen w-full bg-red-500">
      <PlayerDiv id={1} />
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
