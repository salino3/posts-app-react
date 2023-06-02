import {css} from '@emotion/css';

export const container = css`
  display: grid;
  grid-template-areas:
    "l . ."
    "i i b";
  
  font-weight: 600;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  max-width: 245px;

`;

export const label = css`

 grid-area: l;
 `;

export const input = css`
  grid-area: i;
  padding: 4px;
  width: 145px;
  border-radius: 5px;
  margin-right: 3px;
  margin-top: 2px;
  outline: none;

  @media (min-width: 725px) {
    width: 170px;
    margin-right: 6px;
  }
`;

export const btn = css`
  grid-area: b;
  padding: 4px;
  width: 60px;
  border-radius: 8px;
  color: grey;
  background-color: #4361ee;
  opacity: 0.7;

  cursor: pointer;

`;

export const btnActive = css`
    opacity: unset;
    color: white;
  &:active {
    padding: 3px;
    margin: 1px;
    font-size: 15px;
  }
`;

export const divCard = css`
  cursor: pointer;
  text-align: start;
  position: absolute;
  margin-top: 45px;
  z-index: 2;
`;