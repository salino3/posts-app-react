import React from 'react';
import { GlobalContext, MyState, Posts } from '@/core';
import * as classes from './list-posts.styles';

export const ListPosts: React.FC = () => {

   const { state } = React.useContext<MyState>(GlobalContext);
   const { posts } = state;

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>List</h1>
      <div>
        {posts &&
          posts.map((post: Posts) => (
            <div key={post.id}>
              <p>{post?.id}</p>
              <p>{post?.title}</p>
              <p>{post?.keyWords}</p>
              <p>{post?.keyWords[1]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
