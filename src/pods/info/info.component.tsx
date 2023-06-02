import React from 'react';
import { useParams } from 'react-router-dom';
import * as classes from './info.styles';
import { GlobalContext, MyState, Posts } from '@/core';

export const InfoComponent: React.FC = () => {

 const params = useParams();
 const {state} = React.useContext<MyState>(GlobalContext);

 const post: Posts = state?.posts.filter((post: Posts) => post.id === Number(params?.id))[0];

 console.log("post", post);

if(!post){
   return (
     <div className={classes.root}>
       <h1 className={classes.title}>Post didn`t find or don't exist</h1>
     </div>
   );
};


  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        Info Post nº <span className={classes.textRed}>{params?.id}</span>
      </h1>
      <div className={classes.container}>
        <h3>
          Title: <span className={classes.textBlue}>{post?.title}</span>
        </h3>
        <h3>
          Description:{" "}
          <span className={classes.textBlue}>{post?.description}</span>
        </h3>
        <h3>
          Image <br />
          <div className={classes.boxImg}>
            <img
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/public/vite.svg";
              }}
              src={post?.img}
              alt="image"
            />
          </div>
        </h3>
        <div className={classes.boxKeyWords}>
          <h3>
            Key Words:
            <div>
            {post?.keyWords[0] &&  <span className={classes.textBlue}>{post?.keyWords[0]}</span> } <br />
            {post?.keyWords[1] && <span className={classes.textBlue}>{post?.keyWords[1]}</span>} <br />
            {post?.keyWords[2] && <span className={classes.textBlue}>{post?.keyWords[2]}</span>}
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}
