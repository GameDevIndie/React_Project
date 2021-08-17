import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav classname={classes.nav}>
      <ul>
        <li>
          <a href='/'>Home</a>
          <a href='/courses'>Courses</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
