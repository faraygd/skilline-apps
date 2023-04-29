import React from "react";
import HeaderPic from "../images/header-pic.svg";
import PlayLogo from "../images/play.svg";

const Hero = () => {
  return (
    <div>
      <div className="flex m-12 max-w-[1640px] items-center justify-around">
        <div className="w-6/12">
          <h2 className="text-[54px] font-poppins">
            Studying Online is now much easier
          </h2>
          <p className="text-[24px] text-[#464646] font-nunito-sans pt-[34px] leading-tight">
            Skilline is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="flex items-center gap-2">
            <button className="bg-[#F48C06] text-white rounded-full font-poppins h-[80px] w-[220px]">
              Join for Free
            </button>
            <img src={PlayLogo} width={120} alt="" />
            <p className="font-poppins ">Watch how it works</p>
          </div>
        </div>
        <div className="w-4/12">
          <img src={HeaderPic} width={911} height={892} alt="Header Pic" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
