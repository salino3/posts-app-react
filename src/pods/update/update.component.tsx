import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext, MyState, Posts } from '@/core';
import {  useChangeHandler, useChangeHandlerKeyWords, useOnSubmit } from '@/hooks';
import * as classes from './update.styles';

export const UpdateComponent: React.FC = () => {

  const params = useParams();
  const { state } = React.useContext<MyState>(GlobalContext);
  const post: Posts = state.posts.filter((post: Posts) => post.id === Number(params.id))[0];

  const [dataForm, setDataForm] = React.useState<Posts>(post);

  const {handleChange} = useChangeHandler({ dataForm, setDataForm });
  const {handleChangeKeyWords} = useChangeHandlerKeyWords({ dataForm, setDataForm });
  const {handleUpdate} = useOnSubmit(dataForm);


  return (
    <main className={classes.root}>
      <h1>Update Post nº {dataForm && dataForm?.id}</h1>
      <div>
        <form className={classes.form} onSubmit={handleUpdate}>
          <div className={""}>
            <label htmlFor="title">Title</label>
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
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Text a description"
              name="description"
              value={dataForm?.description}
              onChange={handleChange("description")}
              required
            ></textarea>
          </div>
          <div className={""}>
            <label htmlFor="img">
              Image <small>(not required)</small>
            </label>
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
          <div className={""}>
            <label htmlFor="keyWords">
              Key Words <br /> <small>(only first one required)</small>
            </label>
            <input
              placeholder="Text first key word"
              name="keyWords[0]"
              type="text"
              required
              value={dataForm?.keyWords[0]}
              onChange={handleChangeKeyWords(0)}
            />
          </div>
          <div className={""}>
            <input
              placeholder="Text second key word"
              name="keyWords[1]"
              type="text"
              value={dataForm?.keyWords[1]}
              onChange={handleChangeKeyWords(1)}
            />
          </div>
          <div className={""}>
            <input
              placeholder="Text third key word"
              name="keyWords[2]"
              type="text"
              value={dataForm?.keyWords[2]}
              onChange={handleChangeKeyWords(2)}
            />
          </div>
          <div className={""}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </main>
  );
}
