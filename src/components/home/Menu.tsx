import React from "react";
import { HiMenu } from "react-icons/hi";

interface props {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ setIsVisible }: props) => {
  return (
    <div className="w-[calc(100vw-24px)] h-[36px] lg:hidden max-w-[660px] border-b-[1px] border-[#00000030]">
      <HiMenu
        className="text-primary text-4xl cursor-pointer"
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
      />
    </div>
  );
};

export default Menu;
