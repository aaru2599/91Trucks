
const FooterLinkCard = ({data}) => {
  return (
    <div className="flex flex-col gap-2 shadow-lg w-[300px]  rounded-lg p-4 bg-[#f3f4f6]  ">
    {data.map((item, index) => {
      return (
        <a href="" key={index} className="hover:underline hover:duration-1000">
          {item}
        </a>
      );
    })}
  </div>
  )
}

export default FooterLinkCard