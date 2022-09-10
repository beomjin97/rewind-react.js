import React from "react";
import Profile from "../common/Profile";

const Following = () => {
  return (
    <div className="my-10 mx-auto">
      <div className="my-3 flex justify-center">
        <Profile inHeader={false} userName={"yellow"} _id={""} />
        <div className="w-[200px] h-[30px] bg-primary text-xl font-bold text-center">
          following
        </div>
      </div>
      <div className="my-3 flex justify-center">
        <Profile inHeader={false} userName={"yellow"} _id={""} />
        <div className="w-[200px] h-[30px] bg-primary text-xl font-bold text-center">
          following
        </div>
      </div>
      <div className="my-3 flex justify-center">
        <Profile inHeader={false} userName={"yellow"} _id={""} />
        <div className="w-[200px] h-[30px] bg-primary text-xl font-bold text-center">
          following
        </div>
      </div>
      <div className="my-3 flex justify-center">
        <Profile inHeader={false} userName={"yellow"} _id={""} />
        <div className="w-[200px] h-[30px] bg-primary text-xl font-bold text-center">
          following
        </div>
      </div>
      <div className="my-3 flex justify-center">
        <Profile inHeader={false} userName={"yellow"} _id={""} />
        <div className="w-[200px] h-[30px] bg-primary text-xl font-bold text-center">
          following
        </div>
      </div>
    </div>
  );
};

export default Following;
