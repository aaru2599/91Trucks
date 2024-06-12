import Navbar from "../../Molecule/Navbar";
import Footer from "../Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const CardDetail = () => {
  return (
    <div>
      <div className="sticky top-0 z-30">
      <Navbar />
      </div>
      <div className="flex gap-4">
        <div className="lg:w-1/5 md:block hidden">
        <LeftSide />
        </div>
        <div className="lg:w-4/5">
        <RightSide />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CardDetail;
