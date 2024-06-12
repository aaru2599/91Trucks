const ProductCard = ({ productData }) => {
  console.log(productData);
  const {
    imageSrc,
    imagesLink,
    offerLink,
    price,
    specs,
    star,
    title,
    variant,
  } = productData;
  return (
    <div>
      <div className="md:w-[250px] border  rounded ">
        <div className="">
          <img
            className=" rounded-t-md md:w-[250px] md:h-[150px] object-contain border-b "
            src={imageSrc}
            alt=""
          />
        </div>
        <div className="px-4 py-2  flex flex-col gap-1 ">
          <div className="text-[16px] font-semibold truncate">{title}</div>
          <div className="text-slate-500 text-[14px] truncate">{specs} </div>
          <div className=" flex justify-between text-[12px]">
            {" "}
            {variant && <a href="#" className="underline text-theme-color">{variant}</a>}
            <a href="#" className="underline text-theme-color">View Details</a>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="w-[50%] md:text-[14px] text-[12px] font-[500] text-slate-600 truncate">
              {price}
            </div>
            <button className="border  border-theme-color text-theme-color  px-2 py-[2px] md:w-[50%] rounded text-[12px] whitespace-nowrap">
              View Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
