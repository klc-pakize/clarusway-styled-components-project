import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1020px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Flex2 = styled(Flex)`
  flex-direction: column;
  text-align: center;
`;
export const Flex3 = styled(Flex)`
  /* border: 1px solid grey; */
  border-radius: 15px;
  justify-content: space-between;
  text-align: start;
  padding: 2rem;
  box-shadow: rgb(0, 0, 0, 15%) 0px 0px 10px;
  padding: 2.5rem 5rem;
`;

export default Flex;
