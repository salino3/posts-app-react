import React from 'react';
import { List } from './components';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Welcome to Posts-app</h1>
      <div className={classes.container}>
        <section className={classes.section}>
          <h3 className={classes.subTitle}>Where do you want go?</h3>
         <List />
        </section>
      </div>
    </div>
  );
}
