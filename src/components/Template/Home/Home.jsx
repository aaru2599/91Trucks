import styled from "styled-components";
import LeftSideSection from "./LeftSideSection";
import RightSideSection from "./RightSideSection";
import Suggestions from "../../Molecule/Suggestions";
import SampleCarousel from "../../Molecule/SampleCarousel";
import Navbar from "../../Molecule/Navbar";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className=" ">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <SampleCarousel />
      <MainContainer>
        <div className=" my-4 flex justify-center bg-white">
          <Suggestions />
        </div>
        <div className="md:flex gap-4 ">
          <div className="lg:w-3/4 ">
            <LeftSideSection />
          </div>
          <div className="ld:w-1/4  ">
            <RightSideSection />
          </div>
        </div>
      </MainContainer>
      <div className="mt-4">
      <Footer/>
      </div>
    </div>
  );
};

export default Home;

export const MainContainer = styled.section`
  width: calc(100% - 5%);
  margin: 0 auto;
`;
