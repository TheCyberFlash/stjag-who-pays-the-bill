import React from 'react';
import './index.css';
import NameList from './components/NameList';
import Loser from './components/Loser';
import { useNames } from './context/NamesContext';

function App() {
  const { names } = useNames();

  return (
    <div className="container">
      {/* <h1>..Hello World..</h1> */}
      <NameList />
      <Loser names={names} />
    </div>
  );
}

export default App;
