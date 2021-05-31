import { css } from "styled-components";

const flexStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const flexSpacebetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const theme = {
  flexStyle,
  flexColumn,
  flexSpacebetween,
};

export default theme;
