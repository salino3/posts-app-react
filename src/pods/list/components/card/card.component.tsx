import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext, MyState, Posts } from '@/core';
import * as classes from './card.styles';
import { SwitchRoutes } from '@/router';

interface Props {
 post: Posts;
};

export const Card: React.FC<Props> = (props) => {
 const {post} = props;

 const navigate = useNavigate();
 const {deletePost} = React.useContext<MyState>(GlobalContext);

const handleDelete = (post: Posts) => {
  if(post && post?.id){
 deletePost(post?.id);
 };
};

const handleEdit = (post: Posts) => {
  navigate(`${SwitchRoutes.update}/${post.id}`);
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
        <img
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.onerror = null; // para evitar bucles infinitos en caso de que la imagen predeterminada tampoco se cargue correctamente
            e.currentTarget.src = 'public/vite.svg';
          }}
          src={post?.img}
          alt="image"
        />
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
