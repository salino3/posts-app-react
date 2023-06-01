import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext, MyState, Posts } from '@/core';
import {  useChangeHandler, useChangeHandlerKeyWords, useOnSubmit } from '@/hooks';
import * as classes from './update.styles';
import { UpdateForm } from './components';

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
      <h1 className={classes.title}>Update Post nº {dataForm && dataForm?.id}</h1>
      <UpdateForm
       dataForm={dataForm} 
       handleChange={handleChange}
       handleChangeKeyWords={handleChangeKeyWords}
       handleUpdate={handleUpdate} />
    </main>
  );
}
