import React from "react";
import { GlobalContext } from "./global-context";
import { Posts, posts } from "./interface";
import { MyReducer } from "./my-reducer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MyProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(MyReducer, {posts: []} );

  const getPosts = React.useCallback((posts: Posts[]) => {
  dispatch({
    type: "GET_POSTS",
    payload: posts,
  });
}, []);


const createPost = React.useCallback((post: Posts) => {
  
  dispatch({
    type: "CREATE_POST",
    payload: post,
  });
}, []);

const deletePost = React.useCallback((id: number) => {
  dispatch({
    type: "DELETE_POST",
    payload: id,
  });
}, []);

const updatePost = React.useCallback((post: Posts) => {
  dispatch({
    type: "UPDATE_POST",
    payload: post,
  });
}, []);


  React.useEffect(() => {
    getPosts(posts);
  }, [getPosts]);

  console.log("state", state);
  return (
    <GlobalContext.Provider value={{ state, dispatch, updatePost, createPost, deletePost }}>
      {children}
    </GlobalContext.Provider>
  );
};
