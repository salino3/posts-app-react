import React from "react";
import { Posts } from "@/core";
import { FormPost } from "./components";
import {useChangeHandler, useChangeHandlerKeyWords, useOnSubmit } from "./hooks";
import * as classes from "./create-post.styles";

export const CreatePost: React.FC = () => {
    
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
      <h1 className={classes.title}>Create post</h1>
      <FormPost
        dataForm={dataForm}
        handleChange={handleChange}
        handleChangeKeyWords={handleChangeKeyWords}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
