import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 100%;
  margin-top: 10.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  border-radius: 0.25rem;
  flex-wrap: wrap;
`;

export const PreviousAndNextPage = styled.img`
  width: 1.063rem;
  height: 1.692rem;
  display: block;
  margin-top: 0.8rem;
  margin-left: 2.2rem;
  margin-right: 2.2rem;
  cursor: pointer;
`;

export const PaginationItemContainer = styled.div`
  width: 1.8rem;
  height: 3.9rem;
  margin-left: 2.2rem;
  margin-right: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PaginationItem = styled.li`
  margin-top: 0.5rem;
  font-family: "PoppinsMedium", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 100%;
  color: #000000;
  cursor: pointer;
`;

export const CurrentPageUnderline = styled.div`
  width: 2.4rem;
  height: 0.4rem;
  margin-top: 0.6rem;
  background: #db6400;
  border-radius: 0.2rem;
  display: none;
`;

export const MobilePreviousAndNextPage = styled.img`
  width: 1.063rem;
  height: 1.692rem;
  display: block;
  margin-left: 2.2rem;
  margin-top: 0.2rem;
  margin-right: 2.2rem;
  cursor: pointer;
`;

export const MobilePaginationContainer = styled.div`
  width: 100%;
  margin-top: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobilePaginationItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobilePaginationItem = styled.li`
  padding: 0.6rem;
  font-family: ${(props) => props.theme.fonts[0]}, sans-serif;
  font-style: Medium;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 79%;
  color: ${(props) => props.color};
`;
