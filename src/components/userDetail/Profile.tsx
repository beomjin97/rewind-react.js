import React from "react";

const Profile = () => {
  return (
    <div className="flex w-[40%] h-[300px] mx-auto justify-between items-center">
      <div className="text-center">
        <div className="h-[150px] w-[150px] rounded-[50%] bg-primary"></div>
        <div className="text-[#00000080]">김범진</div>
        <div className="font-thin text-4xl">beomjin97</div>
      </div>
      <div className="w-[1px] h-[200px] border-[1px] border-[#00000050]"></div>
      <div className="w-[150px]">
        <div className="text-xl flex justify-between my-6">
          <span>posts</span>
          <span>10</span>
        </div>
        <div className="text-xl flex justify-between my-6">
          <span>followers</span>
          <span>0</span>
        </div>
        <div className="text-xl flex justify-between my-6">
          <span>following</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
