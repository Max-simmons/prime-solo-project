import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';


function LoginPage() {
  const history = useHistory();

  return (
    <>
    <div>
    <img className = 'twoOne' src='/images/logo-3.jpg' alt='21 logo'
    />
    </div>
   
    <div>


      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
    </>
  );
}

export default LoginPage;
