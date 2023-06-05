import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [position, setPosition] = useState('');
  const [playstyle, setPlaystyle] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    if ( number <= -1 || number >= 100 ) {

      alert('INVALID INPUT');
    }


    else {

      dispatch({
        type: 'REGISTER',
        payload: {
          username: username,
          password: password,
          number: number,
          position: position,
          playstyle: playstyle
        },
    })
    };
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="number">
          Number:
          <input
            type="number"
            name="number"
            value= {number}
            required
            onChange={(event) => setNumber(event.target.value)}
            />
        </label>
      </div>
      <div>
        <label htmlFor="position">
        Position:
        </label>
        <select id="position" onChange={(event) => setPosition(event.target.value)}>
          <option value="">--Choose Your Position--</option>
          <option value="Guard">Guard</option>
          <option value="Wing">Wing</option>
          <option value="Big">Big</option>
        </select>
      </div>
      <div>
        <label htmlFor="playstyle">
          Playstyle:
        </label>
        <select id="playstyle" onChange={(event) => setPlaystyle(event.target.value)}>
          <option value="">--How do you Play?--</option>
          <option value="Pass-first, Defensive minded">Pass-first, Defensive minded</option>
          <option value="Offensive minded, Shot Creating">Offensive minded, Shot Creating</option>
          <option value="Slashing, Playmaking">Slashing, Playmaking</option>
          <option value="Athletic, Three-level Scoring">Athletic, Three-level Scoring</option>
          <option value="Two-way, Sharpshooting">Two-way, Sharpshooting</option>
          <option value='Athletic, Rim Attacking'>Athletic, Rim Attacking</option>
          <option value="Rim Protecting, Finishing">Rim Protecting, Finishing"</option>
          <option value="Post-Scoring, Glass Cleaning">Post-Scoring, Glass Cleaning</option>
          <option value="Paint Protecting, Stretch">Paint Protecting, Stretch</option>
          <option value='Defensive minded, Glass cleaning'>Defensive minded, Glass cleaning</option>

        </select>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
