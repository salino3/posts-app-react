import React from 'react';
import * as classes from './search-bar.styles';

export const SearchBar: React.FC = () => {


  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="keyWords">
        Key Words
      </label>
      <input
        className={classes.input}
        name="keyWords"
        placeholder="What do you look for?"
        type="text"
      />
      <button className={classes.btn} type='submit'>Search</button>
    </div>
  );
}
