import React from 'react';
import { ListPosts } from '@/pods';
import * as classes from './list-posts.styles';

export const ListPostsScene: React.FC = () => {
  return (
   <div className={classes.root}>
    <ListPosts />
   </div>
  )
}
