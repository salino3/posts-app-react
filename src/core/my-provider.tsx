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
}, [dispatch]);

  React.useEffect(() => {
    getPosts(posts);
  }, [getPosts]);

  console.log(state);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
