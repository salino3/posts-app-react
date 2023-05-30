import React from 'react';
import * as classes from './navbar.styles';

export const Navbar: React.FC = () => {


  return (
    <nav className={classes.container}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Create Post</a>
        </li>
        <li>
          <a href="#">Update</a>
        </li>
        <li>
          <a href="#">List</a>
        </li>
      </ul>
    </nav>
  );
}
