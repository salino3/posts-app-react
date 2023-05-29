import React from 'react';
import { HomeComponent } from '@/pods';
import * as classes from './home.styles';

export const HomeScene: React.FC = () => {
  return (
    <div className={classes.root}>
      <HomeComponent />
    </div>
  )
}
