import { filters } from "../../../data/FilterData";
import FilterAccordian from "../../Molecule/FilterAccordian";
import "/src/App.css";
const LeftSide = () => {
  const filterData = filters;
  return (
    <div clascarosName="h-[100vh] overflow-x-auto scrollbar-hide sticky top-[60px] rounded">
      <FilterAccordian filterData={filterData} />
    </div>
  );
};

export default LeftSide;
