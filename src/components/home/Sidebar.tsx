import React from "react";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Profile from "../common/Profile";

interface props {
  isVisible: boolean;
}

const Sidebar = ({ isVisible }: props) => {
  const boxStyle = "border-b-[1px] border-[#00000030] py-4";
  const navigate = useNavigate();
  return (
    <div
      className={`w-[70vw] lg:w-[490px] ${
        isVisible
          ? "absolute left-[12px] top-[calc(10vh+36px)] drop-shadow-lg border-t-[1px] border-[#00000030]"
          : "hidden"
      } lg:block lg:relative bg-[#f2f2f2] z-10`}
    >
      <div className={boxStyle}>
        <button
          className="border-primary border-2 flex px-2 hover:bg-primary"
          onClick={() => {
            navigate("/upload");
          }}
        >
          <FiUpload className="text-4xl" />
          <span className="text-2xl font-bold">upload</span>
        </button>
      </div>
      <div className={boxStyle}>
        <div className="text-2xl font-bold mb-4">popular tags</div>
        <div className="flex flex-wrap ">
          <button className="w-[100px] h-[40px] border-primary border-2 rounded-[20px] text-[20px] text-center font-bold hover:bg-primary m-1">
            #seoul
          </button>
          <button className="w-[100px] h-[40px] border-primary border-2 rounded-[20px] text-[20px] text-center font-bold hover:bg-primary m-1">
            #seoul
          </button>
          <button className="w-[100px] h-[40px] border-primary border-2 rounded-[20px] text-[20px] text-center font-bold hover:bg-primary m-1">
            #seoul
          </button>
          <button className="w-[100px] h-[40px] border-primary border-2 rounded-[20px] text-[20px] text-center font-bold hover:bg-primary m-1">
            #seoul
          </button>
          <button className="w-[100px] h-[40px] border-primary border-2 rounded-[20px] text-[20px] text-center font-bold hover:bg-primary m-1">
            #seoul
          </button>
          <button className="w-[100px] h-[40px] border-primary border-2 rounded-[20px] text-[20px] text-center font-bold hover:bg-primary m-1">
            #seoul
          </button>
          <button className="w-[100px] h-[40px] border-primary border-2 rounded-[20px] text-[20px] text-center font-bold hover:bg-primary m-1">
            #seoul
          </button>
        </div>
      </div>
      <div className={boxStyle}>
        <div className="text-2xl font-bold mb-4">recommended accounts</div>
        {/* <Profile inHeader={false} />
        <Profile inHeader={false} />
        <Profile inHeader={false} />
        <Profile inHeader={false} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
