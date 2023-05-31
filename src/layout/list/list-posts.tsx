import React from 'react';
import { ListPostsScene } from '@/scenes';
import * as classes from './list-posts.styles';

export const ListPostsLayout: React.FC = () => {
  return (
    <div className={classes.root}>
    <ListPostsScene />
    </div>
  )
}
