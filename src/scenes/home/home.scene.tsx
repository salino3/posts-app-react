import React from 'react';
import { Footer, Header } from '@/common';
import { HomeComponent } from '@/pods';
import * as classes from './home.styles';

export const HomeScene: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <HomeComponent />
      <Footer />
    </div>
  )
}
