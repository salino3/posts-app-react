import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Welcome to Posts-app</h1>
      <div className={classes.container}>
        <section className={classes.section}>

          <h3 className={classes.subTitle}>Where do you want go?</h3>
        <ul className={classes.list}>
          <li>
            <Link to={"#"}>Go to create a Post</Link>
          </li>
          <li>
            <Link to={"#"}>Look the list post</Link>
          </li>
          <li>
            <Link to={"#"}>Up date a post</Link>
          </li>
        </ul>
        </section>
      </div>
    </div>
  );
}
