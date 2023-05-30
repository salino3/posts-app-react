import {css} from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
  margin-top: 90px;

  a {
    color: white;
  }
`;

export const title = css`
  margin-top: 20px;
  font-size: xx-large;
  font-family: Georgia, "Times New Roman", Times, serif;
  background-image: linear-gradient(120deg, #ff2, #f2f, #22f, #2ff, #2f2, #f22);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 20px;  
`;

export const section = css`
  display: flex;
  flex-direction: column;
  border: solid transparent;
  align-items: center;
  padding: 15px;
  width: 300px;
  height: 160px;
  background: linear-gradient(120deg, #f40202e3 20%, purple 40%, blue 140%);

  @media (min-width: 725px) {
    width: 600px;
    height: 320px;
  }
`;

export const subTitle = css`
  background-image: linear-gradient(120deg, #ffff49, #ff10ff);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const list = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: large;
  font-family: Georgia, "Times New Roman", Times, serif;
  padding: 15px;
  justify-content: center;
  height: 100%;


`;







