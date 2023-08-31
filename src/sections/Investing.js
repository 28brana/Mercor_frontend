import AppleIcon from "../images/icons/apple.svg";
import InstaIcon from "../images/icons/instaDark.svg";
import PlaystoreIcon from "../images/icons/playstore.svg";
import TwitchIcon from "../images/icons/twitchDark.svg";
import TwitterIcon from "../images/icons/twitterDark.svg";
const Investing = () => {
  return (
    <div className="investing-screen bg-black border relative  h-screen">
      <h1 className="font-primary [font-size:40px] text-white xl:mt-28 mt-2 text-center">
        Investing
      </h1>
      <div className="flex justify-between items-start gap-2 lg:px-20 px-2 xl:mt-32 mt-0">
        <div className="w-96 text-center md:text-left">
          <h1 className="font-primary md:[font-size:22px] text-lg  ">Stocks</h1>
          <p className="font-secondary md:text-base text-xs">
            Whether you’re an expert or just getting started, Cash App is the
            fastest and most accessible way to invest in stocks. Start now with
            as little as $1.
          </p>
        </div>
        <div className="w-96 text-center md:text-left">
          <h1 className="font-primary md:[font-size:22px] text-lg ">Bitcoin</h1>
          <p className="font-secondary md:text-base text-xs">
            Cash App is the fastest way to convert dollars to bitcoin. From your
            home screen, six taps are all it takes to stack sats, buy an entire
            bitcoin, or just see what it’s all about.
          </p>
        </div>
        <div className="flex md:flex-row flex-col pb-4 lg:px-16 px-8 justify-between left-0 w-full items-center absolute md:bottom-0 [bottom:-145px]">
          <div className="flex  gap-5">
            <button className="btn-outlined bg-white border-black">
              <img src={AppleIcon} alt="apple" />
              <p className="font-primary">Apple store</p>
            </button>
            <button className="btn-outlined  bg-white border-black">
              <img src={PlaystoreIcon} alt="apple" />
              <p className="font-primary ">GOOGLE PLAY</p>
            </button>
          </div>
         
          <div className="flex xl:flex-row flex-col xl:gap-8 gap-2 mt-2">
            <p className="font-secondary [font-size:10px] md:w-80 w-full md:text-left text-center  ">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </p>
            <div className="flex justify-center gap-8 text-black">
              <img src={TwitchIcon} alt="apple" />
              <img src={TwitterIcon} alt="apple" />
              <img src={InstaIcon} alt="apple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investing;
