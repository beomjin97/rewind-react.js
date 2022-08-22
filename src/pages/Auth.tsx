import React, { useState } from "react";
import Footer from "../components/Footer";

import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Auth = () => {
  const [account, setAccount] = useState<boolean>(true);
  return (
    <div className="w-full h-[100vh] bg-[#DEDEDE] flex justify-center md:items-center flex-wrap ">
      <div className="w-[429px] h-[800px] bg-[#FAFAFA] border-2 border-[#00000030] relative">
        <h1 className="my-20 text-center text-5xl font-bold">Rewind</h1>
        {account ? <Signin /> : <Signup />}
        <div className="w-[320px] h-[1px] bg-[#000] mx-auto my-10" />
        <div className="text-center">
          Rewind 계정이 {account ? "없으시다면" : "있으시다면"}, &nbsp;
          <span
            className="underline text-primary cursor-pointer"
            onClick={() => setAccount((prev) => !prev)}
          >
            {account ? "회원가입" : "로그인"}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
