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

  input-security, textarea {
    margin-top: 2px;
  }
`;
