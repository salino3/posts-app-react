import {css} from '@emotion/css';


export const form = css`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 18px;
  padding: 38px;
  background-color: #6e0000;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 52px;

  label {
    align-self: center;
    font-weight: 600;
  }

  input, textarea {
    margin-top: 2px;
    border-radius: 8px;
    padding: 2px;
  }
`;

export const boxBtnForm = css`
  display: flex;
  place-content: center;
  height: 33px;
  margin-top: 10px;
  button {
    border-radius: 12px;
    color: white;
    background: purple;
    padding: 6px 12px;
    font-size: 18px;
    font-weight: 600;

    &:active {
      padding: 5px 11px;
      margin: 1px;
      height: 31px;
      font-size: 17px;
    }
  }
`;