import { useState } from "react";
import { Wrapper } from "../Home/LeftSideSection";
import Heading from "../../Atoms/Heading";
import { products } from "../../../data/ProductDetailsData";
import ProductCard from "../../Molecule/ProductCard";

const paraData = [
  "Wondering which Volvo bus you should buy? We are here to help you purchase best bus as per your budget and needs. We provide you the genuine user reviews from the real bus owners, latest prices, updated specifications, high-resolution images for all Volvo bus models of 2024 in India.",
  "Sit back & relax! We will also help you get in touch with your nearby Volvo bus dealers and get best available Volvo offers for you once you finalize which bus you want to buy.",
  "There are bus models available from Volvo in India. Most expensive Volvo bus model is 9400 B11R Bus which is priced at 0. On the lower end, 9400 B11R is the least expensive bus model which will cost you 0. These prices are indicative and may vary. Don't forget to check best Volvo offers available near you.",
  "Looking at the Volvo Buses popularity, 9400 B11R is the highly demanded bus model right now having features 55 seats, 6 cylinders and 10700 cc",
];
const detailsData = products;
const RightSide = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="w-full">
      <Wrapper>
        <div className="text-[22px] font-[700]">Best Volvo Buses in India</div>
        <div className="flex flex-col gap-3 mt-2">
          {(showAll ? paraData : paraData.slice(0, 1)).map((para, index) => {
            return <p key={index} className="text-[#333348ab]">{para}</p>;
          })}
        </div>
        <div>
          {showAll ? (
            <button onClick={() => setShowAll(false)} className="text-[14px] text-theme-color underline">Hide</button>
          ) : (
            <button onClick={() => setShowAll(true)} className="text-[14px] text-theme-color underline">Show More...</button>
          )}
        </div>
      </Wrapper>
      <Wrapper>
        <Heading heading={"Truck in India"} />
        <div className="grid md:grid-cols-4 grid-cols-2  md:gap-y-3 gap-2">
          {detailsData.map((product, index) => {
            return <ProductCard key={index} productData={product} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default RightSide;
