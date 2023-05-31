import React from 'react';
import { Posts } from '@/core';
import * as classes from './create-post.styles';

export const CreatePost: React.FC = () => {

 const [dataForm, setDataForm] = React.useState<Posts>({
   id: null,
   title: "",
   description: "",
   img: "",
   keyWords: ["", "", ""],
 });

const handleChange =
  (field: keyof Posts) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (field === "keyWords") {
      const keywords = event.target.value.split(",").slice(0, 3); 
      setDataForm({ ...dataForm, [field]: keywords });
    } else {
      setDataForm({ ...dataForm, [field]: event.target.value });
    }
    console.log("dataForm", dataForm);
  };

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
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange("title")}
          placeholder="Text a title"
          name="title"
          type="text"
          value={dataForm.title}
        />{" "}
        <br />
        <textarea
          onChange={handleChange("description")}
          placeholder="Text a description"
          name="description"
          value={dataForm.description}
        ></textarea>{" "}
        <br />
        <textarea
          name="img"
          placeholder="Choose a image"
          onChange={handleChange("img")}
          id="img"
          cols={30}
          rows={4}
          value={dataForm.img}
        ></textarea>
        <br /> <br />
        <section>
          <input
            onChange={handleChangeKeyWords(0)}
            placeholder="Text first key word"
            name="keyWords[0]"
            type="text"
            required
            value={dataForm.keyWords[0]}
          />{" "}
          <br /> <br />
          <input
            onChange={handleChangeKeyWords(1)}
            placeholder="Text second key word"
            name="keyWords[1]"
            type="text"
            value={dataForm.keyWords[1]}
          />{" "}
          <br /> <br />
          <input
            onChange={handleChangeKeyWords(2)}
            placeholder="Text third key word"
            name="keyWords[2]"
            type="text"
            value={dataForm.keyWords[2]}
          />
        </section>{" "}
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
