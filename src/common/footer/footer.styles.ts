import {css} from '@emotion/css';

export const container = css`
  display: grid;
  grid-template-columns: 15% 20% 30% 20% 15%;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 5px;

  padding: 5px 20px;
  border: solid 2px;
  box-sizing: content-box;

  @media (min-width: 1200px) {
    padding: 5px 0px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;

    div {
      justify-content: flex-start;
      padding: 10px;
      border-radius: 30px;

      @media (min-width: 725px) {
        border: solid;
      min-width: 75px;
      }
    }
  }
`;

export const item = css`

@media (min-width: 725px) {
     min-width: 140px !important;
    
 }
`