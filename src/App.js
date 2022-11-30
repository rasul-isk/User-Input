import './App.css';
import { useState } from 'react';
import Alert from './components/AlertComponent';
import Input from './components/Input/InputComponent';

function App() {
  const [users, setUsers] = useState([]);
  const [currentInput, setCurrentInput] = useState([]);

  const inputSubmitted = (array) => {
    if (array[0] && array[1]) {
      //Simple check for being null/undefined
      setUsers((prev) => {
        return [...prev, array];
      });
    } else console.log('????');
  };
  return (
    <div>
      <Input className="items" passInputs={inputSubmitted}></Input>
      {/* <Alert params={  } /> */}
    </div>
  );
}

export default App;
