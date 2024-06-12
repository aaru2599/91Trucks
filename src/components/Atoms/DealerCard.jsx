
const DealerCard = ({cardData}) => {
    console.log("cardData",cardData);
    const {brand,dealers,logo}=cardData
  return (
    <a href="" className="w-[110px] hover:shadow-lg border  mb-1 h-[110px] flex flex-col p-2 items-center gap-1 rounded duration-300">
        <img src={logo} alt="" className="" />
        <p className="truncate text-[14px] font-[500]">{brand}</p>
        <p className="text-[13px] text-slate-500">{dealers}</p>
    </a>
  )
}

export default DealerCard