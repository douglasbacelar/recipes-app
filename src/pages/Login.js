import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordLength = 6;
  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };
  return (
    <div>
      <form>
        <input
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />

        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !(password.length > passwordLength
            && email.includes('@') && email.includes('.com')) }
          onClick={ handleClick }
        >
          Entrar

        </button>
      </form>
    </div>
  );
}

export default Login;
