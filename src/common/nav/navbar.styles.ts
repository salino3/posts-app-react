import {css} from '@emotion/css';


export const container = css`
  display: flex;
  align-items: center;
  height: 100%;

  ul {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    height: 60%;

    a {
      color: white;
    }

    @media (min-width: 725px) {
      grid-template-columns: 1fr 1fr;
      height: 30%;
    }
  }
`;