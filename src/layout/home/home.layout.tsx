import React from 'react';
import { HomeScene } from '@/scenes';
import * as classes from './home.layout.styles';

export const HomeLayout: React.FC = () => {
  return (
    <main className={classes.root}>
        <HomeScene />
    </main>
  )
}
