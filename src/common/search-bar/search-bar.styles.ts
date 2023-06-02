import {css} from '@emotion/css';

export const container = css`
  display: grid;
  grid-template-areas:
    "l . ."
    "i i b";
  
  font-weight: 600;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  max-width: 245px;
  display: none;

  @media (min-width: 725px) {
    display: unset;
  }
`;

export const label = css`

 grid-area: l;
 `;

export const input = css`
  grid-area: i;
  padding: 4px;
  width: 170px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const btn = css`
  grid-area: b;
  padding: 4px;
  width: 60px;
  border-radius: 8px;
  color: white;
  background-color: #4361ee;
  cursor: pointer;

`;

export const btnActive = css`
  &:active {
    padding: 3px;
    margin: 1px;
    font-size: 15px;
  }
`;