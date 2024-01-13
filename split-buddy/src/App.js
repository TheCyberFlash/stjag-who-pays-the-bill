import React from 'react';
import './index.css';
import NameList from './components/NameList';
import NameInput from './components/NameInput';
import Loser from './components/Loser';
import { useNames } from './context/NamesContext';

function App() {
  const { names } = useNames();

  return (
    <div className="container">
      <h1 className="main-title">Who pays the bill?</h1>

      <div className="main-content">
        <div className="column">
          <NameList />
        </div>
        
      </div>

      <div className="column">
          <NameInput />
        </div>

        <div className="column">
          <Loser names={names} />
        </div>
    </div>
  );
}

export default App;
