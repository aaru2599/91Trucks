import { useState } from "react";
import { Link } from "react-router-dom";

//   {
//     heading: "Search Trucks By Brands",
//     cardData: [
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/tata.jpg",
//         imgLink: "",
//         name: "Tata",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/ashok-leyland.jpg",

//         imgLink: "",
//         name: "Ashok Leyland",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/mahindra.jpg",
//         imgLink: "",
//         name: "mahindra",
//       },
//       {
//         imgSrc:
//           "https://images.91trucks.com/trucks/brands/omega-seiki-mobility.avif",
//         imgLink: "",
//         name: "Omega Seiki Mobility",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/eicher.jpg",
//         imgLink: "",
//         name: "Eicher",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/swaraj-mazda.avif",
//         imgLink: "",
//         name: "Swaraj Mazda",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/bharat-benz.avif",
//         imgLink: "",
//         name: "Bharat Benz",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/force.avif",
//         imgLink: "",
//         name: "Force",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/volvo.jpg",
//         imgLink: "",
//         name: "volvo",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/premier.jpg",
//         imgLink: "",
//         name: "Premier",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/man.jpg",
//         imgLink: "",
//         name: "MAN",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/scania.jpg",
//         imgLink: "",
//         name: "Scania",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/hino.avif",
//         imgLink: "",
//         name: "Hino",
//       },
//     ],
//   },
//   {
//     heading: "Search Buses By Brands",
//     cardData: [
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/tata.jpg",
//         imgLink: "",
//         name: "Tata",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/ashok-leyland.jpg",

//         imgLink: "",
//         name: "Ashok Leyland",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/mahindra.jpg",
//         imgLink: "",
//         name: "mahindra",
//       },
//       {
//         imgSrc:
//           "https://images.91trucks.com/trucks/brands/omega-seiki-mobility.avif",
//         imgLink: "",
//         name: "Omega Seiki Mobility",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/eicher.jpg",
//         imgLink: "",
//         name: "Eicher",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/swaraj-mazda.avif",
//         imgLink: "",
//         name: "Swaraj Mazda",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/bharat-benz.avif",
//         imgLink: "",
//         name: "Bharat Benz",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/force.avif",
//         imgLink: "",
//         name: "Force",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/volvo.jpg",
//         imgLink: "",
//         name: "volvo",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/premier.jpg",
//         imgLink: "",
//         name: "Premier",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/man.jpg",
//         imgLink: "",
//         name: "MAN",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/scania.jpg",
//         imgLink: "",
//         name: "Scania",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/hino.avif",
//         imgLink: "",
//         name: "Hino",
//       },
//     ],
//   },
//   {
//     heading: "Search Auto Rickshaws By Brands",
//     cardData: [
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/tata.jpg",
//         imgLink: "",
//         name: "Tata",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/ashok-leyland.jpg",

//         imgLink: "",
//         name: "Ashok Leyland",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/mahindra.jpg",
//         imgLink: "",
//         name: "mahindra",
//       },
//       {
//         imgSrc:
//           "https://images.91trucks.com/trucks/brands/omega-seiki-mobility.avif",
//         imgLink: "",
//         name: "Omega Seiki Mobility",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/eicher.jpg",
//         imgLink: "",
//         name: "Eicher",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/swaraj-mazda.avif",
//         imgLink: "",
//         name: "Swaraj Mazda",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/bharat-benz.avif",
//         imgLink: "",
//         name: "Bharat Benz",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/force.avif",
//         imgLink: "",
//         name: "Force",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/volvo.jpg",
//         imgLink: "",
//         name: "volvo",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/premier.jpg",
//         imgLink: "",
//         name: "Premier",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/man.jpg",
//         imgLink: "",
//         name: "MAN",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/scania.jpg",
//         imgLink: "",
//         name: "Scania",
//       },
//       {
//         imgSrc: "https://images.91trucks.com/trucks/brands/hino.avif",
//         imgLink: "",
//         name: "Hino",
//       },
//     ],
//   },
// ];

const SearchByBrands = ({ searchByData }) => {
  console.log("SearchByData", searchByData);
  const { cardData, heading } = searchByData;
  const [showAll, setShowAll] = useState(false);
  const title = heading.split(" ");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="flex flex-col gap-2 ">
        <div className="font-[500]">{heading}</div>
        <div className="grid grid-cols-3 gap-2">
          {(showAll ? cardData : cardData.slice(0, 9)).map((product, i) => {
            return (
              <Link
                onClick={scrollToTop}
                to={`/${title[1]}/${product.name}`}
                key={i}
                className={`flex flex-col items-center border w-[80px] h-[80px] p-2 rounded  hover:shadow-lg duration-200 ${
                  showAll && i >= 9 ? "animate-fadeIn" : ""
                }`}
              >
                <img
                  src={product.imgSrc}
                  alt=""
                  className="object-contain h-[50px]"
                />
                <p className="truncate w-[60px] text-[14px] text-center">
                  {product.name}
                </p>
              </Link>
            );
          })}
        </div>
        <div>
          {showAll ? (
            <button
              className="animate-fadeIn border text-[14px] border-theme-color rounded px-2 text-theme-color"
              onClick={() => setShowAll(false)}
            >
              Hide
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className="border text-[14px] border-theme-color rounded px-2 text-theme-color animate-fadeIn"
            >
              Show All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchByBrands;
