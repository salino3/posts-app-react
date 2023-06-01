import React from 'react';
import { useParams } from 'react-router-dom';
import * as classes from './update.styles';

export const UpdateComponent: React.FC = () => {

  const params = useParams();

  return (
    <div className={classes.root}>
      <h1>Update Post nº {params?.id}</h1>
     <form>

     </form>
    </div>
  );
}
