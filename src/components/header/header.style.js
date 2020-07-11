import { css } from "@emotion/core";

export const header = () => css`
  display: flex;
  align-items: flex-start;
`;

export const headerTitle = (theme) => css`
  text-align: center;
  /* flex: 1; */
  width: 52%;
  font-size: 3.6rem;
  text-transform: lowercase;
  padding: 20px 0;
  color: ${theme.color.primary.black};
`;
