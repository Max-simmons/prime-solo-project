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

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        number: number,
        position: position,
        playstyle: playstyle
      },
    });
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
          <option value="guard">Guard</option>
          <option value="wing">Wing</option>
          <option value="big">Big</option>
        </select>
      </div>
      <div>
        <label htmlFor="playstyle">
          Playstyle:
        </label>
        <select id="playstyle" onChange={(event) => setPlaystyle(event.target.value)}>
          <option value="">--How do you Play?--</option>
          <option value="pass-first, defensive minded">Pass-first, Defensive minded</option>
          <option value="two-way, sharpshooting">Two-way, Sharpshooting</option>
          <option value="rim protecting, finishing">Rim Protecting, Finishing"</option>

        </select>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
