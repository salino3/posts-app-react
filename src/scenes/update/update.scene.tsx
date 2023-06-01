import React from 'react';
import { Footer, Header } from '@/common';
import { UpdateComponent } from '@/pods';
import * as classes from './update.styles';

export const UpdateScene: React.FC = () => {
  return (
   <div className={classes.root}>
    <Header />
    <UpdateComponent />
    <Footer />
   </div>
)
}
