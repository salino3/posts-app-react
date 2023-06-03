import React from 'react';
import { Link } from 'react-router-dom';
import { Posts } from '@/core';
import { SwitchRoutes } from '@/router';
import { Card } from '../card';
import * as classes from './grid.styles';

interface Props {
    posts: Posts[];
};

export const GridComponent: React.FC<Props> = (props) => {
    const {posts} = props;

  return (
    <div className={classes.list}>
      {!posts || posts.length === 0 ? (
        <h1 className={classes.link}>
          There are not posts.. &nbsp; {" "}<Link to={SwitchRoutes.create}>Click here for create one</Link>
        </h1>
      ) : (
        posts.map((post: Posts) => <Card post={post} key={post?.id} />)
      )}
    </div>
  );
}
