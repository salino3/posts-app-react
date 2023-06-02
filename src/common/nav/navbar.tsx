import React from 'react';
import { Link } from 'react-router-dom';
import { SwitchRoutes } from '@/router';
import * as classes from './navbar.styles';

export const Navbar: React.FC = () => {


  return (
    <nav className={classes.container}>
      <ul>
        <li>
          <Link to={SwitchRoutes.create}>Create Post</Link>
        </li>
        <li>
          <Link to={SwitchRoutes.list}>List</Link>
        </li>
      </ul>
    </nav>
  );
}
