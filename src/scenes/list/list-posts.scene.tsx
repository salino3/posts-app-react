import React from 'react';
import { Footer, Header } from '@/common';
import { ListPosts } from '@/pods';
import * as classes from './list-posts.styles';

export const ListPostsScene: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <ListPosts />
      <Footer />
    </div>
  );
}
