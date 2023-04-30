import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/Recipe-book.gif';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const passwordLength = 6;
  const history = useHistory();

  const handleClick = () => {
    if (disabled) {
      setMessage(true);
    }
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  useEffect(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email) && password.length > passwordLength) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);
  // AA96D9
  // bg-[#d5f7e9]
  return (
    <div
      className="login-bg w-screen h-screen flex flex-column items-center justify-center
    font-sans"
    >
      <img src={ logo } alt="logo-recipes" className="w-64 mb-14" />
      <form
        className="flex justify-center items-center flex-col gap-2"
      >
        <label htmlFor="email">
          <input
            className="p-2 border-2 border-[#0a9b61] rounded-md
            focus:border-green-500 outline-none"
            data-testid="email-input"
            type="email"
            placeholder="Email"
            value={ email }
            id="email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password">
          <input
            className="p-2 border-2 border-[#0a9b61] rounded-md
                    focus:border-green-500 outline-none"
            data-testid="password-input"
            type="password"
            placeholder="Password"
            id="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <span className="text-red-400">
          {disabled ? 'Review required fields'
            : ''}
        </span>

        <button
          disabled={ disabled }
          type="button"
          data-testid="login-submit-btn"
          className={ `bg-[#0a9b61] hover:bg-[#5db994] text-white p-2 m-0
           font-bold rounded-md w-full ${disabled ? 'opacity-50' : 'opacity-1'}` }
          onClick={ handleClick }
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
