import { searchByData } from "../../../data/SearchByData";
import SearchByBrands from "../../Molecule/SearchByBrands";

const searchData = searchByData;
const RightSideSection = () => {
  return (
    <div  className="flex flex-col gap-5  ">
      {searchData.map((data, index) => {
        return <div key={index} className=" bg-white rounded shadow-lg p-4">
          <SearchByBrands  searchByData={data} />
        </div>;
      })}
    </div>
  );
};

export default RightSideSection;
