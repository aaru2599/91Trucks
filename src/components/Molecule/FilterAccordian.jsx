import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterAccordian = ({ filterData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordian = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="p-2 bg-white flex flex-col  ">
      {filterData.map((filter, index) => {
        return (
          <div key={index} className="border-b p-3 flex flex-col gap-2">
            <button
              onClick={() => toggleAccordian(index)}
              className="flex  items-center w-full justify-between "
            >
              <p className="font-[500]">{filter.heading.toUpperCase()}</p>
              <div
                className={` transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown />
              </div>
            </button>
            {
              filter.heading==="Brands"&&<div className="border-2 rounded ">
                <input type="text" placeholder="Search Brands.. " className="p-2 w-full outline-none"/>
              </div>
            }
            {activeIndex === index && (
              <div className="flex flex-col gap-2 animate-fadeIn">
                {filter.options.map((option, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2 ">
                      <input type="checkbox" />
                      <label className="text-[14px]">{option}</label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FilterAccordian;
