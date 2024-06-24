import FacebookIcon from "../Icons/Facebook";
import InstagramIcon from "../Icons/Instagram";
import TwitterIcon from "../Icons/Twitter";
import WhatsappIcon from "../Icons/WhatsApp";
import YoutubeIcon from "../Icons/Youtube";
import FooterLinkCard from "./FooterLinkCard";
import { Wrapper } from "./Home/LeftSideSection";
const partnerBrands=[{
    imgSrc:"https://www.91trucks.com/91tractors-logo.webp",
    link:"",
},{
    imgSrc:"https://www.91trucks.com/91wheels-logo.webp",
    link:"",
},{
    imgSrc:"https://www.91trucks.com/giznext-logo.webp",
    link:"",
},{
    imgSrc:"https://www.91trucks.com/tyreplex-logo.webp",
    link:"",
}]
const socialMediaIcons = [
  {
    Icon: <YoutubeIcon />,
    link: "",
    fill: "",
  },
  {
    Icon: <FacebookIcon />,
    link: "",
    fill: "",
  },
  {
    Icon: <TwitterIcon />,
    link: "",
    fill: "",
  },
  {
    Icon: <WhatsappIcon />,
    link: "",
    fill: "",
  },
  {
    Icon: <InstagramIcon />,
    link: "",
    fill: "",
  },
];
const centerData = [
  "About Us",
  "Contact Us",
  "Terms and Conditions",
  "Advertise With Us",
];
const rightData = ["Feedback", "Privacy Policy", "Consent Declaration"];
const Footer = () => {
  return (
    <div className=" flex flex-col md:items-center gap-4 bg-white p-4">
      <div className="flex flex-col md:flex-row md:gap-24 gap-4">
        <div className="flex flex-col md:gap-4 gap-2">
          <div>
            <img src="https://www.91trucks.com/91trucks-logo.png" alt="logo" />
          </div>
          <div className="text-[16px] text-slate-700"> Prices are indicative and subject to change.</div>
          <div className="flex gap-2">
            {socialMediaIcons.map((data, index) => (
              <a href="" key={index} className="">
                {data.Icon}
              </a>
            ))}
          </div>
          <div className="text-[12px] text-slate-700">© 2024 91Trucks</div>
        </div>
        <div className="flex gap-10">
        <FooterLinkCard data={centerData}/>
        <FooterLinkCard data={rightData}/>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-[16px] text-slate-800 font-[500]" >Our website Partners</div>
        <div className="flex items-center gap-4">{
        partnerBrands.map((item,index)=>{
            return <a href="" key={index}><img className="w-[100px]" src={item.imgSrc} alt="partners" /></a>
        })}</div>
      </div>
    </div>
  );
};

export default Footer;
