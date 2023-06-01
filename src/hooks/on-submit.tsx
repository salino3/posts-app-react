import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext, MyState, Posts } from "@/core";
import { SwitchRoutes } from "@/router";

export const useOnSubmit = (dataForm : Posts) => {

  const navigate = useNavigate();
  const { createPost, state } = React.useContext<MyState>(GlobalContext);
  let newId: number | null | undefined = state?.posts[state.posts.length - 1]?.id;


  if(!newId || newId === null){
    newId = 1
  }else {
    newId++
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const nonEmptyKeyWords = dataForm.keyWords.filter(
      (keyword) => keyword !== ""
    );
    const result = { ...dataForm, keyWords: nonEmptyKeyWords, id: newId };

    console.log("onSubmit", result);
         
   createPost(result); 
   navigate(SwitchRoutes.list);
  };

  return {
    handleSubmit,
  };
};
