import React from 'react';
import { PageNotFoundScene } from '@/scenes';
import * as classes from './page-not-found.styles';

export const PageNotFoundLayout: React.FC = () => {
  return (
  <div className={classes.container}>
     <PageNotFoundScene />
  </div>
  );
}
