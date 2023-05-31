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
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.boxInput}>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange("title")}
            placeholder="Text a title"
            id="title"
            name="title"
            type="text"
            value={dataForm.title}
            required
          />
        </div>
        <div className={classes.boxInput}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            onChange={handleChange("description")}
            placeholder="Text a description"
            name="description"
            value={dataForm.description}
            required
          ></textarea>
        </div>
        <div className={classes.boxInput}>
          <label htmlFor="img">
            Image <small>(not required)</small>
          </label>
          <textarea
            name="img"
            placeholder="Paste your URL image"
            onChange={handleChange("img")}
            id="img"
            cols={30}
            rows={4}
            value={dataForm.img}
          ></textarea>
        </div>
        <div className={classes.boxInput}>
          <label htmlFor="keyWords">
            Key Words <br /> <small>(only first one required)</small>
          </label>
          <input
            onChange={handleChangeKeyWords(0)}
            placeholder="Text first key word"
            name="keyWords[0]"
            type="text"
            required
            value={dataForm.keyWords[0]}
          />
        </div>
        <div className={classes.boxInput}>
          <input
            onChange={handleChangeKeyWords(1)}
            placeholder="Text second key word"
            name="keyWords[1]"
            type="text"
            value={dataForm.keyWords[1]}
          />
        </div>
        <div className={classes.boxInput}>
          <input
            onChange={handleChangeKeyWords(2)}
            placeholder="Text third key word"
            name="keyWords[2]"
            type="text"
            value={dataForm.keyWords[2]}
          />
        </div>
        <div className={classes.boxBtnForm}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
