import PhoneImage from "../images/home/phone.png";
import EyeImage from "../images/home/eye.png";
import DollarImage from "../images/home/dollar.png";
import AppleIcon from "../images/icons/apple.svg";
import PlaystoreIcon from "../images/icons/playstore.svg";
import TwitchIcon from "../images/icons/twitch.svg";
import TwitterIcon from "../images/icons/twitter.svg";
import InstaIcon from "../images/icons/insta.svg";
import ArrowDownIcon from "../images/icons/arrowDown.svg";
import ListIcon from "../images/icons/list.svg";
import { useState } from "react";
const Home = () => {
  const links = [
    "sign in",
    "legal",
    "licenses",
    "security",
    "careers",
    "press",
    "support",
    "status",
    "codeblog",
  ];
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="bg-black h-screen text-white layer">
        <div
          className="absolute z-40  lg:hidden w-6 h-6 right-3 top-3"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={ListIcon} width={"100%"} height={"100%"} alt="list" />
        </div>
      <div className="lg:hero-screen  h-full w-full">
        <div className="lg:flex [display:none] items-center justify-center gap-5 pt-8">
          {links.map((link) => (
            <p className="font-primary text-xs uppercase" key={link}>
              {link}
            </p>
          ))}
          <div className="absolute xl:right-16 right-10">
            <img src={EyeImage} alt="phone" />
          </div>
          <div className="absolute xl:left-16 left-10">
            <img src={DollarImage} alt="phone" />
          </div>
        </div>
        <div className="sm:h-full h-3/4 md:[line-height:166px] sm:[line-height:10rem] [line-height:5rem]  relative flex-col font-primary lg:[font-size:193px] md:[font-size:180px] sm:[font-size:160px]  xs:[font-size:100px] [font-size:80px] flex justify-center items-center">
          <div> CASH</div>
          <div className="relative z-10"> APP</div>
          <div className="absolute md:w-auto sm:w-80 xs:w-60 w-40 ">
            <img src={PhoneImage} width={"100%"} height={"100%"} alt="phone" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col pb-4 lg:px-16 px-8 justify-between left-0 w-full items-center absolute bottom-0">
          <div className="flex  gap-5">
            <button className="btn-outlined">
              <img src={AppleIcon} alt="apple" />
              <p className="font-primary">Apple store</p>
            </button>
            <button className="btn-outlined">
              <img src={PlaystoreIcon} alt="apple" />
              <p className="font-primary ">GOOGLE PLAY</p>
            </button>
          </div>
          <div className="md:block hidden">
            <img src={ArrowDownIcon} alt="down" />
          </div>
          <div className="flex xl:flex-row flex-col xl:gap-8 gap-2 mt-2">
            <p className="font-secondary [font-size:10px] md:w-80 w-full text-center ">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </p>
            <div className="flex justify-center gap-8">
              <img src={InstaIcon} alt="apple" />
              <img src={TwitchIcon} alt="apple" />
              <img src={TwitterIcon} alt="apple" />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="bg-black flex flex-col gap-10 items-center justify-center fixed h-screen w-screen z-50 top-0 left-0 lg:hidden">
          <div
            className="absolute font-secondary text-lg   w-6 h-6 right-3 top-3"
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </div>
          <div className="">
            <img src={EyeImage} alt="eye" />
          </div>
          <div className="text-center flex flex-col gap-6">
            {links.map((link) => (
              <p className="font-primary text-xs uppercase  py-1" key={link}>
                {link}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
