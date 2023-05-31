import React from 'react';
import { Link } from 'react-router-dom';
import { SwitchRoutes } from '@/router';
import * as classes from './list.styles';

export const List: React.FC = () => {
  return (
    <ul className={classes.list}>
      <li>
        <Link to={SwitchRoutes.create}>Go to create a post</Link>
      </li>
      <li>
        <Link to={SwitchRoutes.list}>Look the list post</Link>
      </li>
    </ul>
  );
}
