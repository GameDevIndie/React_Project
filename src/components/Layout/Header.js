import { Fragment } from 'react';
import classes from './Header.module.css';
import Navigation from './Navigation';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Udemy</h1>
        <Navigation />
      </header>
    </Fragment>
  );
};

export default Header;
