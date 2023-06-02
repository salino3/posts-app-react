import { css, keyframes } from "@emotion/css";


export const root = css`
  border: solid;
  width: calc(100% - 15px);

  position: fixed;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  max-height: 90px;
  background-image: url("/assets/gallery/estrellas.jpg");
  background-repeat: repeat;

  @media (min-width: 725px) {
    justify-content: space-between;
    
  }
`;

export const btnHome = css`
  padding: 8px;
  border-radius: 12px;
  background-color: blueviolet;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  max-width: 65px;
  max-height: 35px;
  cursor: pointer;

  &:active {
    padding: 7px;
    margin: 1px;
    font-size: 15px;
  }

  @media (min-width: 725px) {
    margin-left: 15px;
  }
`;

export const boxContent = css`

 display: flex;
 flex-direction: row;
 gap: 20px;

 @media (min-width: 1024px) {
 gap: 50px;
}
 
`;

export const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(360deg);
  }
`;

export const rotation = css`
  animation: ${rotateAnimation} 2.5s linear infinite;
  display: none;

  @media (min-width: 725px) {
    display: unset;
    margin-right: 15px;
    
  }
`;
