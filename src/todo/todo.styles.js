import { css } from "@emotion/core";

export const todo = (theme) => css`
  position: relative;
  flex: 1 0 auto;
  text-align: center;
  max-height: 34px;
  margin: 16px 0 0;
  font-size: 24px;
  border-bottom: 1px solid ${theme.color.primary.red};
`;

export const todoText = (theme, isCompleted) => css`
  position: absolute;
  height: 50px;
  width: 100%;
  left: 50%;
  textDecoration: ${isCompleted ? "line-through" : "initial"};
  transform: translate(-50%);
`;
