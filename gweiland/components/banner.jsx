import { Chip, Typography } from "@mui/material";
import Image from "next/image.js";
import ChatIcon from '@mui/icons-material/Chat';

export const Banner = () => {
  return (
    <>
      <div className="bannerContainer">
        <Image src={require("../public/banner.jpg")} className="bannerImg" alt="banner" />
        <div className="bannerHoverTextContainer">
            <Typography variant="h2" className="hoverText">premium zip hoodies</Typography>
            <Chip label="shop now" variant="outlined" className="cursor-pointer "/>
            
          </div>
          <div className="chatIcon"><ChatIcon className="iconsizeChat"/></div>
      </div>
    </>
  );
};
