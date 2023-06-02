import { css } from "@emotion/css";

export const root = css`

  margin-top: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
`;

export const title = css`
  margin-top: 25px;
  font-size: xx-large;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  word-wrap: break-word;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: x-large;
  margin-top: 30px;
  max-width: 300px;
  word-wrap: break-word;
`;

export const textRed = css`
  color: #c40101;
`;

export const textBlue = css`
  color: #1e01c4;
`;

export const boxImg = css`

  img {
    min-width: 100px;
    max-width: 340px;
    max-height: 340px;
    border-radius: 10px;
  }
`;

export const boxKeyWords = css`

  h3 {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;


