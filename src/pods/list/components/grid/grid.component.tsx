import React from 'react';
import { Posts } from '@/core';
import { Card } from '../card';
import * as classes from './grid.styles';

interface Props {
    posts: Posts[];
};

export const GridComponent: React.FC<Props> = (props) => {
    const {posts} = props;

  return (
    <div className={classes.list}>
      {posts && posts.map((post: Posts) => <Card post={post} key={post?.id} />)}
    </div>
  );
}
