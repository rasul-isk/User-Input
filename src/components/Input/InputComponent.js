import { useState } from 'react';
import './InputComponent.css';

const InputComponent = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  const usernameChanged = (event) => {
    setUsername(event.target.value);
  };
  const ageChanged = (event) => {
    setAge(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.passInputs([username, age]);
  };

  return (
    <form className="input-body" onSubmit={submitForm}>
      <p>Username</p>
      <input type="text" placeholder="Your username." onChange={usernameChanged} />
      <p>Age</p>
      <input type="number" placeholder="Your age." onChange={ageChanged} />
      <button type="submit">Enter</button>
    </form>
  );
};

export default InputComponent;
