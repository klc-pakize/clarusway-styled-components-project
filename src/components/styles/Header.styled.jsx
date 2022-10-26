import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 4rem 0;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem 0px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1020px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export const Image = styled(Logo)`
  width: 350px;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
  }
`;

export default StyledHeader;
