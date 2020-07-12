import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

export default function Item({ children, flex, align }) {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align:${align};
      `}
    >
      {children}
    </div>
  );
}

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
};
