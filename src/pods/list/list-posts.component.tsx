import React from 'react';
import { GlobalContext, MyState } from '@/core';
import { GridComponent } from './components';
import * as classes from './list-posts.styles';

export const ListPosts: React.FC = () => {

   const { state } = React.useContext<MyState>(GlobalContext);
   const { posts } = state;

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>List</h1>
      <GridComponent posts={posts} />
    </div>
  );
}
