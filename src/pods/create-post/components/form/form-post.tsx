import React from 'react';
import { Posts } from '@/core';
import * as classes from './form-post.styles';

interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: (field: keyof Posts) => React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> ;
  handleChangeKeyWords: (index: number) => React.ChangeEventHandler<HTMLInputElement>;
  dataForm: Posts;
};

export const FormPost: React.FC<Props> = (props) => {
    const {handleSubmit, handleChange, handleChangeKeyWords, dataForm} = props;

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange("title")}
        placeholder="Text a title"
        name="title"
        type="text"
        value={dataForm.title}
      />
      <br />
      <textarea
        onChange={handleChange("description")}
        placeholder="Text a description"
        name="description"
        value={dataForm.description}
      ></textarea>
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
        />
        <br /> <br />
        <input
          onChange={handleChangeKeyWords(1)}
          placeholder="Text second key word"
          name="keyWords[1]"
          type="text"
          value={dataForm.keyWords[1]}
        />
        <br /> <br />
        <input
          onChange={handleChangeKeyWords(2)}
          placeholder="Text third key word"
          name="keyWords[2]"
          type="text"
          value={dataForm.keyWords[2]}
        />
      </section>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
