import React from 'react';
import { Posts } from '@/core';
import * as classes from './update-form.styles';

interface Props {
  dataForm: Posts;
  handleUpdate: React.FormEventHandler<HTMLFormElement>;
  handleChange: (field: keyof Posts) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleChangeKeyWords: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void
};

export const UpdateForm: React.FC<Props> = (props) => {
    const {dataForm, handleUpdate, handleChange, handleChangeKeyWords } = props;

  return (
    <form className={classes.form} onSubmit={handleUpdate}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input
          placeholder="Text a title"
          id="title"
          name="title"
          type="text"
          value={dataForm?.title}
          onChange={handleChange("title")}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label> <br />
        <textarea
          id="description"
          placeholder="Text a description"
          name="description"
          value={dataForm?.description}
          onChange={handleChange("description")}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="img">
          Image <small>(not required)</small>
        </label>{" "}
        <br />
        <textarea
          name="img"
          placeholder="Paste your URL image"
          id="img"
          cols={30}
          rows={4}
          value={dataForm?.img ? dataForm?.img : "* Default Image *"}
          onChange={handleChange("img")}
        ></textarea>
      </div>
      <div>
        <label htmlFor="keyWords">
          Key Words <small>(only first one required)</small>
        </label>{" "}
        <br />
        <input
          placeholder="Text first key word"
          name="keyWords[0]"
          type="text"
          required
          value={dataForm?.keyWords[0]}
          onChange={handleChangeKeyWords(0)}
        />
      </div>
      <div >
        <input
          placeholder="Text second key word"
          name="keyWords[1]"
          type="text"
          value={dataForm?.keyWords[1]}
          onChange={handleChangeKeyWords(1)}
        />
      </div>
      <div>
        <input
          placeholder="Text third key word"
          name="keyWords[2]"
          type="text"
          value={dataForm?.keyWords[2]}
          onChange={handleChangeKeyWords(2)}
        />
      </div>
      <div className={classes.boxBtnForm}>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
