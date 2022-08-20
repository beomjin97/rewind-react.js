import React, { useState } from "react";
import axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  const inputStyle =
    "w-[320px] h-[40px] mx-auto mb-5 block bg-[#DEDEDE] border-2 border-[#00000030] rounded pl-4 focus:outline-primary focus:bg-[#fff]";

  const [visiblePW, setVisiblePW] = useState<boolean>(false);
  const [visiblePWC, setVisiblePWC] = useState<boolean>(false);

  const [userData, setUserData] = useState<{
    name: string;
    userName: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }>({
    name: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signUp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/signUp",
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
        name="name"
        type="text"
        placeholder="이름"
        className={inputStyle}
        onChange={handleChange}
      />
      <input
        name="userName"
        type="text"
        placeholder="사용자 이름"
        className={inputStyle}
        onChange={handleChange}
      />
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
          className="absolute right-[70px] top-[400px] cursor-pointer text-lg"
          onClick={() => setVisiblePW(false)}
        />
      ) : (
        <AiFillEyeInvisible
          className="absolute right-[70px] top-[400px] cursor-pointer text-lg"
          onClick={() => setVisiblePW(true)}
        />
      )}
      <input
        name="passwordConfirm"
        type={visiblePWC ? "text" : "password"}
        placeholder="비밀번호 확인"
        className={inputStyle}
        onChange={handleChange}
      />
      {visiblePWC ? (
        <AiFillEye
          className="absolute right-[70px] top-[460px] cursor-pointer text-lg"
          onClick={() => setVisiblePWC(false)}
        />
      ) : (
        <AiFillEyeInvisible
          className="absolute right-[70px] top-[460px] cursor-pointer text-lg"
          onClick={() => setVisiblePWC(true)}
        />
      )}
      <button
        className="w-[320px] h-[40px] bg-primary block mx-auto rounded font-bold text-white"
        onClick={signUp}
      >
        회원가입
      </button>
    </>
  );
};

export default Signup;
