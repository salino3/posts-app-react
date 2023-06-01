import React from 'react';
import { Posts } from '@/core';
import * as classes from './card.styles';

interface Props {
 post: Posts;
};

export const Card: React.FC<Props> = (props) => {
 const {post} = props;

const handleDelete = (post: Posts) => {
 console.log(post.id);
};

const handleEdit = (post: Posts) => {
  console.log(post.id);
};

  return (
    <div className={classes.card}>
      <h4 className={classes.id}>
        {post?.id})
        <div className={classes.btns}>
          <button onClick={() => handleEdit(post)}>Edit</button>{" "}
          <button onClick={() => handleDelete(post)}>Delete</button>
        </div>
      </h4>
      <p className={classes.title}>
        <span>Title:</span> <span>{post?.title}</span>
      </p>
      <p className={classes.desc}>
        <span>Description:</span> <span>{post?.description}</span>
      </p>
      <div className={classes.boxImg}>
        <img src={post?.img} alt="image" />
      </div>
      <h4 className={classes.pKey}>
        <span>Keywords:</span>
        <div>
          <span>1) {post?.keyWords[0]}</span> <br />
          {post?.keyWords[1] && <span>2) {post?.keyWords[1]}</span>} <br />
          {post?.keyWords[2] && <span>3) {post?.keyWords[2]}</span>}
        </div>
      </h4>
    </div>
  );
}
