import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//import Header from '../Layout/Header';
//import Home from '../HomePage/Home';
import classes from './LoginForm.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
//Hello

const LoginForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const name = 'root';
  const pass = 'root';

  let history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Hi');
    if (enteredUsername === name && enteredPassword === pass) {
      console.log('Hi');
      history.push('/courses');
    }
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={classes.input}>
        <label className={classes.login}>Log In</label>
        <label htmlFor='username' className={classes.label}>
          Username
        </label>
        <input
          id='username'
          type='text'
          className={classes.input}
          value={enteredUsername}
          onChange={(event) => setEnteredUsername(event.target.value)}
        ></input>
        <label htmlFor='password' className={classes.label}>
          Password
        </label>
        <input
          id='password'
          type='password'
          className={classes.input}
          value={enteredPassword}
          onChange={(event) => setEnteredPassword(event.target.value)}
        ></input>
        <Button type='submit'>Submit</Button>
      </form>
    </Card>
  );
};

export default LoginForm;
