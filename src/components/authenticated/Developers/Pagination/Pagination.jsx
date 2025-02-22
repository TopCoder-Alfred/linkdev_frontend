import {
  PaginationContainer,
  PaginationList,
  PaginationItemContainer,
  PaginationItem,
  CurrentPageUnderline,
  PreviousAndNextPage,
  MobilePreviousAndNextPage,
  MobilePaginationContainer,
  MobilePaginationItemContainer,
  MobilePaginationItem,
} from "./Pagination.styled";
import "./Pagination.css";
import previousIcon from "../../../../assets/icons/previous.svg";
import nextIcon from "../../../../assets/icons/next.svg";

import { useEffect, useState } from "react";

// paginate is the function which will render a specific page and be attached to each pagination item
// allDevelopers is the total number of all developers
const Pagination = ({
  paginate,
  allDevelopers,
  developersPerPage,
  jumpToPrePage,
  jumpToNextPage,
  currentPage,
}) => {
  // pageNumbers is an array of displayed pagination items
  const [pageNumbers, setPageNumbers] = useState([]);

  const totalPages = Math.ceil(allDevelopers / developersPerPage);

  useEffect(() => {
    let arr = [];
    // at max 10 pages will be shown in pagination
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        arr.push(i);
      }
      setPageNumbers(arr);
    } else {
      for (let i = 1; i <= 10; i++) {
        arr.push(i);
      }
      setPageNumbers(arr);
    }
  }, [allDevelopers, developersPerPage]);

  useEffect(() => {
    let arr = [];
    // condition 1: if total pages larger than 10 and current page
    // is not within the last 10 pages, render a variable pagination
    // starting from the current page to the (current page + 9) page
    if (totalPages > 10 && currentPage <= totalPages - 9) {
      for (let i = currentPage; i <= currentPage + 9; i++) {
        if (i <= totalPages) {
          arr.push(i);
        }
      }
      setPageNumbers(arr);
    }
    // condition 2: if total pages less than 10, render a variable pagination
    // starting from page 1 to the last page
    else if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        arr.push(i);
      }
      setPageNumbers(arr);
    }
    // if both condition 1 & 2 not satisfied, render a fixed pagination
    // starting from (totalPages - 9) page to the last page
    else {
      for (let i = totalPages - 9; i <= totalPages; i++) {
        arr.push(i);
      }
      setPageNumbers(arr);
    }
  }, [currentPage]);

  if (screen.width < 761) {
    // if screen width is less than 761px, mobile version of pagination
    return (
      <MobilePaginationContainer>
        <MobilePreviousAndNextPage
          src={previousIcon}
          onClick={() => jumpToPrePage()}
        />
        <MobilePaginationItemContainer>
          <MobilePaginationItem color="#DB6400">
            {currentPage}
          </MobilePaginationItem>
        </MobilePaginationItemContainer>
        <MobilePaginationItemContainer>
          <MobilePaginationItem color="#000000">/</MobilePaginationItem>
        </MobilePaginationItemContainer>
        <MobilePaginationItemContainer>
          <MobilePaginationItem color="#000000">
            {totalPages}
          </MobilePaginationItem>
        </MobilePaginationItemContainer>
        <MobilePreviousAndNextPage
          src={nextIcon}
          onClick={() => jumpToNextPage()}
        />
      </MobilePaginationContainer>
    );
  }

  return (
    <PaginationContainer>
      <PaginationList>
        <PreviousAndNextPage
          src={previousIcon}
          onClick={() => jumpToPrePage()}
        />
        {pageNumbers.length > 0 &&
          pageNumbers.map((number) => (
            <PaginationItemContainer
              onClick={() => paginate(number)}
              key={number}
            >
              <PaginationItem>{number}</PaginationItem>
              <CurrentPageUnderline
                className={number === currentPage ? "currentPageEffect" : null}
              />
            </PaginationItemContainer>
          ))}
        <PreviousAndNextPage src={nextIcon} onClick={() => jumpToNextPage()} />
      </PaginationList>
    </PaginationContainer>
  );
};

export default Pagination;
