import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const inputStyle =
    "w-[76%] h-[40px] mx-auto mb-5 block bg-[#DEDEDE] border-2 border-[#00000030] rounded pl-4 focus:outline-primary focus:bg-[#fff]";
  const [userDataIsEmpty, setUserDataIsEmpty] = useState<boolean>(true);
  const [userData, setUserData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [visiblePW, setVisiblePW] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.email !== "" && userData.password !== "") {
      setUserDataIsEmpty(false);
    } else {
      setUserDataIsEmpty(true);
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signIn = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/signIn",
        userData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={signIn}>
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
          className="block absolute right-[15%] top-[280px] cursor-pointer text-lg"
          onClick={() => setVisiblePW(false)}
        />
      ) : (
        <AiFillEyeInvisible
          className="block absolute right-[15%] top-[280px] cursor-pointer text-lg"
          onClick={() => setVisiblePW(true)}
        />
      )}
      <button
        className={`w-[76%] h-[40px] block mx-auto rounded font-bold text-white ${
          userDataIsEmpty ? "bg-[#DEDEDE]" : "bg-primary"
        }`}
        onClick={signIn}
        disabled={userDataIsEmpty}
      >
        로그인
      </button>
    </form>
  );
};

export default Signin;
