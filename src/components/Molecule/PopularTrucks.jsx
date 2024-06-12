import { useRef, useState } from "react";
// import { mostPopularData } from "../../data/MostPopulaData";
import Heading from "../Atoms/Heading";
import ProductCard from "./ProductCard";
import DealerCard from "../Atoms/DealerCard";
import "/src/App.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogCard from "../Atoms/BlogCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// const popularData = mostPopularData;
const PopularTrucks = ({ popularData }) => {
  const { heading, category } = popularData;
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };
  const hasManyProducts = category[selectedCategory]?.products?.length >= 4;
  const hasManyBlogs = category[selectedCategory]?.blogDetails?.length >= 3;
  
  const containerRef = useRef(null);
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 180,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className=" flex flex-col  gap-4 ">
      <Heading heading={heading} />
      <div className="flex  gap-6 overflow-scroll scrollbar-hide">
        {category.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`border border-theme-color md:text-sm   text-center whitespace-nowrap px-2 py-1 rounded ${
                selectedCategory === index ? "bg-theme-color text-white" : ""
              }`}
            >
              {item.name || item.city}
            </button>
          );
        })}
      </div>
      <div className="relative">
        {hasManyProducts &&(
          <>
            <button className="absolute top-[50%] left-0" onClick={scrollLeft}>
              <MdKeyboardArrowLeft  className="w-[24px] h-[24px]  bg-theme-color    text-white rounded-full " />{" "}
              
            </button>
            <button
              className="absolute top-[50%] right-0"
              onClick={scrollRight}
            >
              <MdKeyboardArrowRight className="w-[24px] h-[24px]  bg-theme-color    text-white rounded-full" />
            </button>
          </>
        )}

        {selectedCategory !== null && (
          <div
            className="flex overflow-auto scrollbar-hide  gap-4"
            ref={containerRef}
          >
            {category[selectedCategory].products &&
              category[selectedCategory].products.map((product, index) => {
                return <ProductCard key={index} productData={product} />;
              })}
            {category[selectedCategory].dealerData &&
              category[selectedCategory].dealerData.map((product, index) => {
                return (
                  <div key={index} className="">
                    <DealerCard cardData={product} />
                  </div>
                );
              })}
            {category[selectedCategory].blogDetails &&
              category[selectedCategory].blogDetails.map((product, index) => {
                return (
                  <div key={index} className="">
                    <BlogCard blogData={product}/>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularTrucks;
