import styled from "styled-components";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-300);
  padding: 1.6rem 4.8rem;
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
