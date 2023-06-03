import {css} from '@emotion/css';

export const container = css`
  height: 100%;
`;

export const form = css`

  display: flex;
  flex-direction: column;
  
  gap: 18px;
  border: solid #03fcfcdd 3px;
  padding: 38px;
  background-color: #25007b6e;
  border-radius: 12px 92px;
  margin-bottom: 52px;

  label {
    align-self: center;
    font-weight: 600;
  }

`;

export const boxInput = css`
  
  display: grid;
  grid-template-rows: auto auto;
  gap: 2px;
  text-align: center;
  input, textarea {
    border-radius: 12px;
    padding: 2px;
    padding-left: 5px;
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
    cursor: pointer;

    &:active {
      padding: 5px 11px;
      margin: 1px;
      height: 31px;
      font-size: 17px;
    }
  }
`;




