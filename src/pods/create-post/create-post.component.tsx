import React from 'react';
import { Posts } from '@/core';
import * as classes from './create-post.styles';

export const CreatePost: React.FC = () => {

 const [dataForm, setDataForm] = React.useState<Posts>({
   id: null,
   title: "",
   description: "",
   img: "",
   keyWords: [""],
 });

//  const handleChange = (field: keyof Posts) => (event: any) => {
//      setDataForm({ ...dataForm, [field]: event.target.value });
//      console.log("dataForm", dataForm);
//    };

const handleChange =
  (field: keyof Posts) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (field === "keyWords") {
      const keywords = event.target.value.split(",").slice(0, 3); // Obtén las palabras clave y limita a 3
      setDataForm({ ...dataForm, [field]: keywords });
    } else {
      setDataForm({ ...dataForm, [field]: event.target.value });
    }
    console.log("dataForm", dataForm);
  };



  return (
    <div className={classes.root}>
      <h1>Create post</h1>
      <form>
        <input
          onChange={handleChange("title")}
          placeholder="Text a title"
          name="title"
          type="text"
        />{" "}
        <br />
        <textarea
          onChange={handleChange("description")}
          placeholder="Text a description"
          name="description"
        ></textarea>{" "}
        <br />
        <input
          placeholder="Chosse a image"
          onChange={handleChange("img")}
          name="img"
          type="file"
        />{" "}
        <br /> <br />
        <section>
          <input
            onChange={handleChange("keyWords")}
            placeholder="Text a title"
            name="keyWords[0]"
            type="text"
          />{" "}
          <br /> <br />
          <input
            onChange={handleChange("keyWords")}
            placeholder="Text a title"
            name="keyWords[1]"
            type="text"
          />{" "}
          <br /> <br />
          <input
            onChange={handleChange("keyWords")}
            placeholder="Text a title"
            name="keyWords[2]"
            type="text"
          />
        </section>
      </form>
    </div>
  );
}
