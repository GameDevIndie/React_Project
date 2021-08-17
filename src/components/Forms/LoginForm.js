import { useState } from 'react';
//import { Link } from 'react-router-dom';

//import Header from '../Layout/Header';
//import Home from '../HomePage/Home';
import classes from './LoginForm.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

const LoginForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const name = 'root';
  const pass = 'root';

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Hi');
    if (enteredUsername === name && enteredPassword === pass) {
      return ;
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={classes.input}>
        <label className={classes.login}>Log In</label>
        <label
          htmlFor='username'
          className={classes.label}
          value={enteredUsername}
          onChange={(event) => setEnteredUsername(event.target.value)}
        >
          Username
        </label>
        <input id='username' type='text' className={classes.input}></input>
        <label
          htmlFor='password'
          className={classes.label}
          value={enteredPassword}
          onChange={(event) => setEnteredPassword(event.target.value)}
        >
          Password
        </label>
        <input id='password' type='password' className={classes.input}></input>
        <Button type='submit'>Submit</Button>
      </form>
    </Card>
  );
};

export default LoginForm;
