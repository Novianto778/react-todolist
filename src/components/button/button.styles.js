import { css } from "@emotion/core";

export const button = ({ color,align, theme }) => {
  let textColor;
  const {color: {primary}} = theme

  switch(color){
    case "black":
      textColor= primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor= primary.black;
      break;
  }

  return css`
  font-size: 1.8rem;
  color : ${textColor};
  padding: 16px;
  // width: 24%;
  background: unset;
  border: unset;
  outline: unset;
  cursor: pointer;
  text-align: ${align};
`;
}
