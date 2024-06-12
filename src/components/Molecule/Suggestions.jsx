import Heading from "../Atoms/Heading";

const suggestionsData = [
  {
    productName: "Pick Up",
    productImage: "https://www.91trucks.com/pickup.webp",
  },
  {
    productName: "Mini",
    productImage: "https://www.91trucks.com/mini-truck.webp",
  },
  {
    productName: "Three Wheeler",
    productImage: "https://www.91trucks.com/three-wheeler.webp",
  },
  {
    productName: "Bus",
    productImage: "https://www.91trucks.com/bus.webp",
  },
];
const Suggestions = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
     <div className="text-center">
     <Heading heading={"What are you looking for?"} />
     </div>
      <div className="flex gap-5 ">
        {suggestionsData.map((item, index) => {
          return (
            <a href="#" key={index} className="flex flex-col  items-center  hover:scale-105 transition hover:transform duration-500 ">
              <img src={item.productImage} alt=""  className="border rounded-3xl "/>
              <p>{item.productName}</p>
            </a>
          );
        })}
      </div>
      {/* <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
        <div className="relative">
          <img
            className="w-full h-40 object-cover"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tata Intra V30"
          />
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center mb-2">
            <div className="font-bold text-lg text-black">Tata Intra V30</div>
            <i className="fas fa-info-circle text-gray-500 ml-2"></i>
          </div>
          <p className="text-red-600 font-bold text-xl mb-1">₹8.11 Lakh</p>
          <p className="text-gray-700 text-sm mb-2">
            Petrol, 70 HP, 4 cylinders, 1496 cc...
          </p>
          <div className="flex justify-between items-center mb-2">
            <a
              href="#view-price"
              className="text-blue-600 text-sm font-semibold"
            >
              View Price
            </a>
            <a
              href="#images"
              className="text-blue-600 text-sm font-semibold flex items-center"
            >
              <i className="fas fa-image mr-1"></i> Images
            </a>
          </div>
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-red-700 transition duration-300">
            View Offer
          </button>
          <div className="text-center mt-2">
            <a href="#variants" className="text-blue-600 text-sm font-semibold">
              8 Variants
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Suggestions;
