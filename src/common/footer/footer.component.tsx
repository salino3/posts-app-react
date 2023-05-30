import React from 'react';
import * as classes from './footer.styles';

export const Footer:React.FC = () => {
  return (
    <footer className={classes.container}>
      <div className="item">
        <div>Element 1</div>
      </div>
      <div>
        <div className={classes.item}>Element 2</div>
      </div>
      <div className="item">
        <div>Element 3</div>
      </div>
      <div>
        <div className={classes.item}>Element 4</div>
      </div>
      <div className="item">
        <div>Element 5</div>
      </div>
      <div className="item">
        <div>Element 6</div>
      </div>
      <div>
        <div className={classes.item}>Element 7</div>
      </div>
      <div className="item">
        <div>Element 8</div>
      </div>
      <div>
        <div className={classes.item}>Element 9</div>
      </div>
      <div className="item">
        <div>Element 10</div>
      </div>
    </footer>
  );
}
