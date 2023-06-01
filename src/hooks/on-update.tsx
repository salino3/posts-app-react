import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext, MyState, Posts } from "@/core";
import { SwitchRoutes } from '@/router';

interface Props {
  dataForm: Posts;
};

export const onUpdate = ({dataForm}: Props) => {

    const {updatePost} = React.useContext<MyState>(GlobalContext);
    const navigate = useNavigate();

  const handleUpdate: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();

    updatePost(dataForm);
    navigate(SwitchRoutes.list);
  };

  return {
    handleUpdate,
  }

};