import React from 'react';
import { UpdateScene } from '@/scenes';
import * as classes from './update.styles';

export const UpdateLayout: React.FC = () => {
  return (
  <div className={classes.root}>
    <UpdateScene />
  </div>);
};
