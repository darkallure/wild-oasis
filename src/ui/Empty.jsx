import styled from "styled-components";
const StyledEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

function Empty({ resourceName }) {
  return <StyledEmpty>No {resourceName} could be found.</StyledEmpty>;
}

export default Empty;
