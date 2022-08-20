import React, { useState } from "react";
import axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signin = () => {
  const inputStyle =
    "w-[320px] h-[40px] mx-auto mb-5 block bg-[#DEDEDE] border-2 border-[#00000030] rounded pl-4 focus:outline-primary focus:bg-[#fff]";

  const [userData, setUserData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const [visiblePW, setVisiblePW] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signIn = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/signIn",
        userData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        name="email"
        type="email"
        placeholder="사용자 이메일"
        className={inputStyle}
        onChange={handleChange}
      />
      <input
        name="password"
        type={visiblePW ? "text" : "password"}
        placeholder="비밀번호"
        className={inputStyle}
        onChange={handleChange}
      />
      {visiblePW ? (
        <AiFillEye
          className="absolute right-[70px] top-[280px] cursor-pointer text-lg"
          onClick={() => setVisiblePW(false)}
        />
      ) : (
        <AiFillEyeInvisible
          className="absolute right-[70px] top-[280px] cursor-pointer text-lg"
          onClick={() => setVisiblePW(true)}
        />
      )}
      <button
        className="w-[320px] h-[40px] bg-primary block mx-auto rounded font-bold text-white"
        onClick={signIn}
      >
        로그인
      </button>
    </>
  );
};

export default Signin;
