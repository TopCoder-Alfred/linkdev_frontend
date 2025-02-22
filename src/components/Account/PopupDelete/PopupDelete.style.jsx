import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  position: relative;
  max-width: 31rem;
  height: 16.5rem;
  border-radius: 1.6rem;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);

  p {
    color: ${({ theme }) => theme.colors.StormDust};
    padding: 4rem 4rem 0 5rem;
    text-align: center;
    font-family: JosefinSansMedium;
    line-height: 133%;
    font-style: medium;
    font-weight: 500;
    font-size: 1.8rem;
  }
  img {
    position: absolute;
    top: -30%;
    left: 75%;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.6rem;
`;

export const StyledBtn = styled.button`
  width: 11.6rem;
  height: 3.2rem;
  border-radius: 6.8rem;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.pickledBluewood};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: #3a5064;
  }
`;
export const WhiteBtn = styled(StyledBtn)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.05rem solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #e9e9e9;
    color: ${({ theme }) => theme.colors.pickledBluewood};
  }
`;
