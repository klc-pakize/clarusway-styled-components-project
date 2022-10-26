import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 4rem 0;
`;

export const UL = styled.ul`
  list-style-type: none;
  color: #fff;
  width: 250px;
`;
export const Lİ = styled.li`
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 1.3rem;
  padding: 0 1.7rem 0 0;
`;

export const A = styled.a`
  color: rgb(255, 255, 255);
  display: inline-flex;
  margin: auto;
`;

export const Lİ2 = styled.li`
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  text-decoration: none;
  font-size: 1.5rem;
  max-width: 1020px;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    text-align: center;
  }
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1020px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default StyledFooter;
