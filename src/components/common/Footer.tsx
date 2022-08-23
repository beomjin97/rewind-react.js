import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-[100%] text-center text-[#00000060] mt-0 absolute bottom-4">
      &copy; {year} Rewind from beomjin97
    </div>
  );
};

export default Footer;
