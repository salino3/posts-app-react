import React from 'react';
import { Posts } from '@/core';
import { FormPost } from './components';
import * as classes from './create-post.styles';
import { useChangeHandler } from './hooks/change-handler/change-handler.component';

export const CreatePost: React.FC = () => {

    
 const [dataForm, setDataForm] = React.useState<Posts>({
   id: null,
   title: "",
   description: "",
   img: "",
   keyWords: ["", "", ""],
 });

// const handleChange =
//   (field: keyof Posts) =>
//   (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     if (field === "keyWords") {
//       const keywords = event.target.value.split(",").slice(0, 3); 
//       setDataForm({ ...dataForm, [field]: keywords });
//     } else {
//       setDataForm({ ...dataForm, [field]: event.target.value });
//     }
//     console.log("dataForm", dataForm);
//   };

const { handleChange } = useChangeHandler({ dataForm, setDataForm });

    const handleChangeKeyWords =
      (index: number) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const keywords = [...dataForm.keyWords];
        keywords[index] = event.target.value;
        setDataForm({ ...dataForm, keyWords: keywords });
            console.log("dataForm", dataForm);
      };


const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const nonEmptyKeyWords = dataForm.keyWords.filter(
    (keyword) => keyword !== ""
  );
  const result = { ...dataForm, keyWords: nonEmptyKeyWords };

  console.log("onSubmit", result);
};



  return (
    <div className={classes.root}>
      <h1>Create post</h1>
      <FormPost
        dataForm={dataForm}
        handleChange={handleChange}
        handleChangeKeyWords={handleChangeKeyWords}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
