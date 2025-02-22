import {
  PageContainer,
  CardsSection,
  CardsContainer,
} from "./Developer.styled";
import NavBar from "./Navbar";
import DeveloperHeader from "./Header";
import DeveloperCard from "./DeveloperCard";
import Pagination from "./Pagination";
import LoadingEffect from "../../loading";
import CopyRightFooter from "./CopyRightFooter";

import { useEffect, useState } from "react";
import axios from "../../utils/request/index";

const Developers = () => {
  // allDevelopers is an array of user objects
  // currentPageDevelopers is an array of current page user objects
  const [allDevelopers, setAllDevelopers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageDevelopers, setCurrentPageDevelopers] = useState([]);
  const [developersPerPage] = useState(10);

  const cardColor1 = "#16697A";
  const cardColor2 = "#FFA62B";

  const viewProfileBtnColor1 = "#2A3D4E";
  const viewProfileBtnColor2 = "#DB6400";

  const viewProfileBtnHoverColor1 = "#3A5064";
  const viewProfileBtnHoverColor2 = "#C55A00";

  useEffect(() => {
    const fetchDevList = async () => {
      setLoading(true);
      const res = await axios.get("/api/users");
      setAllDevelopers(res.data);
      setLoading(false);
    };
    fetchDevList();
  }, []);

  useEffect(() => {
    const indexOfLastPost = currentPage * developersPerPage;
    const indexOfFirstPost = indexOfLastPost - developersPerPage;
    const currentPageDevelopersArr = allDevelopers.slice(
      indexOfFirstPost,
      indexOfLastPost,
    );
    setCurrentPageDevelopers(currentPageDevelopersArr);
  }, [allDevelopers, developersPerPage, currentPage]);

  // this function will render a specific page and it will be attached to each pagination item
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // this function will be attached to PreviousPage component
  const jumpToPrePage = () => {
    if (currentPage >= 2) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  // this function will be attached to NextPage component
  const jumpToNextPage = () => {
    const totalPages = Math.ceil(allDevelopers.length / developersPerPage);
    if (currentPage <= totalPages - 1) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  // if in loading, loading component will be rendered
  if (loading) {
    return <LoadingEffect />;
  }

  return (
    <PageContainer>
      <NavBar developerPage={true} />
      <DeveloperHeader />
      <CardsSection>
        <CardsContainer>
          {currentPageDevelopers.length > 0 &&
            currentPageDevelopers.map((developer, index) => (
              <DeveloperCard
                name={developer.name}
                cardColor={!(index % 2 === 0) ? cardColor1 : cardColor2}
                btnColor={
                  !(index % 2 === 0)
                    ? viewProfileBtnColor1
                    : viewProfileBtnColor2
                }
                btnHoverColor={
                  !(index % 2 === 0)
                    ? viewProfileBtnHoverColor1
                    : viewProfileBtnHoverColor2
                }
                key={index}
                title={developer.title}
                avatar={developer.avatar.url}
              />
            ))}
        </CardsContainer>
      </CardsSection>
      <Pagination
        paginate={paginate}
        jumpToPrePage={jumpToPrePage}
        jumpToNextPage={jumpToNextPage}
        allDevelopers={allDevelopers.length}
        developersPerPage={developersPerPage}
        currentPage={currentPage}
      />
      <CopyRightFooter />
    </PageContainer>
  );
};

export default Developers;
