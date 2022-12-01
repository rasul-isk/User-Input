import './App.css';
import { useState } from 'react';
import Input from './components/Input/InputComponent';
import Users from './components/Users/UserComponent';
import Alert from './components/Alert/AlertComponent';
function App() {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const userClicked = () => {
    setInfo('');
    setAlertVisible(false);
  };

  const inputSubmitted = (array) => {
    if (array[0] && array[1] && !(array[1]<0)) {
      //Simple check for being null/undefined
      setUsers((prev) => {
        return [...prev, array];
      });
    } else {
      setInfo('Entered wrong value!');
      setAlertVisible(true);
    }
  };
  return (
    <div className="items">
      {!alertVisible && <Input passInputs={inputSubmitted}></Input>}
      {!alertVisible && <Users items={users} />}
      {alertVisible && <Alert items={info} clickHandle={userClicked} />}
    </div>
  );
}

export default App;
