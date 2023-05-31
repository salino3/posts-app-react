import React from 'react';
import * as classes from './navbar.styles';
import { Link } from 'react-router-dom';
import { SwitchRoutes } from '@/router';

export const Navbar: React.FC = () => {


  return (
    <nav className={classes.container}>
      <ul>
        <li>
          <Link to={SwitchRoutes.root}>Home</Link>
        </li>
        <li>
          <Link to={SwitchRoutes.create}>Create Post</Link>
        </li>
        <li>
          <Link to={"#"}>Update</Link>
        </li>
        <li>
          <Link to={"#"}>List</Link>
        </li>
      </ul>
    </nav>
  );
}
