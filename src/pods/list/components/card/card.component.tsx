import React from 'react';
import { Posts } from '@/core';
import * as classes from './card.styles';

interface Props {
 post: Posts;
};

export const Card: React.FC<Props> = (props) => {
 const {post} = props;

  return (
    <div className={classes.card}>
      <p className={classes.id}>
        {post?.id})
        <div className={classes.btns}>
          <button>Edit</button> <button>Delete</button>
        </div>
      </p>
      <p className={classes.title}>
        <span>Title:</span> <span>{post?.title}</span>
      </p>
      <p className={classes.desc}>
        <span>Description:</span> <span>{post?.description}</span>
      </p>
      <div className={classes.boxImg}>
        <img src={post?.img} alt="image" />
      </div>
      <p className={classes.pKey}>
        <span>Keywords:</span>
        <div>
          <span>1) {post?.keyWords[0]}</span> <br />
          {post?.keyWords[1] && <span>2) {post?.keyWords[1]}</span>} <br />
          {post?.keyWords[2] && <span>3) {post?.keyWords[2]}</span>}
        </div>
      </p>
    </div>
  );
}
