import {css} from '@emotion/css';


export const card = css`
  border: solid;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  gap: 10px;
  margin: 5px auto;

  @media (min-width: 725px) {
    margin: 5px;
    width: 220px;
  }
`;

export const id = css`
 
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 color: blue;
 font-weight: 700; 
`;

export const btns = css`

 height: 26px;

  button {
    padding: 4px 7px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    border-radius: 5px;
    font-size: 16px;
    background-color: #bfbf22;
    color: white;

    &:active {
      padding: 3px 6px;
      margin: 1px 2.5px;
      font-size: 15px;
    }
  }
  & :last-child {
    background-color: red;
  }
`;

export const title = css` 

 text-decoration: underline #630000 2px;
`;

export const desc = css`
  border: solid blue 1px;
  border-radius: 5px;
  padding: 5px;
  min-height: 40px;
  max-height: 80px;
`;

export const boxImg = css`

img {
    min-width: 100px;
    max-width: 200px;
    max-height: 200px;
    border-radius: 12px;
  }
`;

export const pKey = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;




