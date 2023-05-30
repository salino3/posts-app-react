import {css} from '@emotion/css';


export const container = css`
  ul {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 20px;

    a {
      color: white;
    }
  }
`;