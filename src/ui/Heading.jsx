import styled, { css } from "styled-components";
// const test = css`
//   text-align: center;
//   ${(props) =>
//     props.primary &&
//     css`
//       color: palevioletred;
//     `}
// `;
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: bold;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 20px;
      font-weight: bold;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 35px;
      font-weight: bold;
    `}
  line-height: 1.2;
`;
export default Heading;
