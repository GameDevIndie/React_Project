import { Fragment } from 'react';
import image01 from '../../Images/01.jpg';
import classes from './CourseList.module.css';

const CourseList = () => {
  const list = [
    {
      id: 1,
      title: 'Course-01',
      img: <img src={image01} height='200' width='200' alt='not found' />,
    },
    {
      id: 2,
      title: 'Course-02',
      img: './Images/01.jpg',
    },
    {
      id: 3,
      title: 'Course-03',
      img: './Images/01.jpg',
    },
  ];

  return (
    <Fragment>
      <div className={classes.main}>
        <h1>Course List</h1>
        <div>
          <h4>{list[0].id}</h4>
          <h4>{list[0].title}</h4>
          {list[0].img}
        </div>
      </div>
    </Fragment>
  );
};

export default CourseList;
