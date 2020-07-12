import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

export default function Container({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  height,
}) {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-warp: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
  `;
  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  flexDirection: PropTypes.oneOf(
    "row",
    "column",
    "row-reverse",
    "column-reverse"
  ),
  flexWrap: PropTypes.oneOf("nowrap", "wrap", "wrap-reverse"),
  justifyContent: PropTypes.oneOf(
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ),
  alignItems: PropTypes.oneOf(
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "start",
    "end",
    "self-start",
    "self-end",
    "baseline",
    "first-baseline",
    "last-baseline"
  ),
  alignContent: PropTypes.oneOf(
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "start",
    "end",
    "space-between",
    "space-around",
    "space-evenly",
    "baseline",
    "first-baseline",
    "last-baseline"
  ),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch",
  height: "auto",
};
