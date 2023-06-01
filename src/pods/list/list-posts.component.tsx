import React from 'react';
import { GlobalContext, MyState, Posts } from '@/core';
import * as classes from './list-posts.styles';
import { Card } from './components';

export const ListPosts: React.FC = () => {

   const { state } = React.useContext<MyState>(GlobalContext);
   const { posts } = state;

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>List</h1>
      <div className={classes.list}>
        {posts &&
          posts.map((post: Posts) => <Card post={post} key={post?.id} />)}
      </div>
    </div>
  );
}
