import { css } from "@emotion/core";

export const button = ({ color,align }) => {
  let textColor;

  switch(color){
    case "black":
      textColor= '#484848';
      break;
    case "red":
      textColor = '#c06262';
      break;
    default:
      textColor= '#484848';
      break;
  }

  return css`
  font-size: 1.8rem;
  color : ${textColor};
  padding: 16px;
  width: 24%;
  background: unset;
  border: unset;
  outline: unset;
  cursor: pointer;
  text-align: ${align};
`;
}
