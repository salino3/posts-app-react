import React from 'react';
import { InfoScene } from '@/scenes';
import * as classes from './info.styles';

export const InfoLayout: React.FC = () => {
  return (
    <div className={classes.root}>
      <InfoScene />
    </div>
  )
}
