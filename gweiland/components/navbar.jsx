import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TwitterIcon from "@mui/icons-material/Twitter";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
export const Navbar = () => {
  return (
    <div className="mainContainer flexPropertyNav md:flex justify-between  items-center	bg-black	p-5 items-center">
      <div className="flexPropertyNav md:flex justify-between items-center gap-2">
        <div className="flex items-center	">
          <p className="whiteColor">brands</p>
          <KeyboardArrowDownIcon className="whiteColor  iconsize" />
        </div>
        <div className="flex items-center">
          <p className="whiteColor">shop</p>
          <KeyboardArrowDownIcon className="whiteColor iconsize" />
        </div>
        <p className="whiteColor">premium</p>
        <p className="whiteColor">gift cards</p>
      </div>
      <div className="brava">Brava</div>
      <div className="flexPropertyNav md:flex gap-2 items-center">
        <p className="whiteColor">become a affiliate</p>
        <TwitterIcon className="whiteColor iconsize" />
        <TabletMacIcon className="whiteColor iconsize" />
        <InstagramIcon className="whiteColor iconsize" />
        <PersonIcon className="whiteColor iconsize" />
        <SearchIcon className="whiteColor iconsize" />
        <ShoppingBagIcon className="whiteColor iconsize" />
      </div>
    </div>
  );
};
