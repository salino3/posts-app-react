import React from "react";
import { GlobalContext, MyState, Posts } from "@/core";
import { FormPost } from "./components";
import {useChangeHandler, useChangeHandlerKeyWords, useOnSubmit } from "./hooks";
import * as classes from "./create-post.styles";

export const CreatePost: React.FC = () => {

    // const {state} = React.useContext<MyState>(GlobalContext);
    // const {posts} = state;
    
  const [dataForm, setDataForm] = React.useState<Posts>({
    id: null,
    title: "",
    description: "",
    img: "",
    keyWords: ["", "", ""],
  });

  const { handleChange } = useChangeHandler({ dataForm, setDataForm });

  const {handleChangeKeyWords} = useChangeHandlerKeyWords({dataForm, setDataForm});

  const {handleSubmit} = useOnSubmit(dataForm);

  return (
    <div className={classes.root}>
      <h1>Create post</h1>
      <FormPost
        dataForm={dataForm}
        handleChange={handleChange}
        handleChangeKeyWords={handleChangeKeyWords}
        handleSubmit={handleSubmit}
      />
      <div>
        {/* {posts &&
          posts.map((post: Posts) => (
            <div>
              <p>{post.title}</p>
              <p>{post.keyWords}</p>
              <p>{post.keyWords[1]}</p>
            </div>
          ))} */}
      </div>
    </div>
  );
};
