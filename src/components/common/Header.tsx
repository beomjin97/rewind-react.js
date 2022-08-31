import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import Profile from "./Profile";
import { userType } from "../../type";
import { userState } from "../../store";

const Header = () => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useRecoilState<userType>(userState);

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // search call
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const { userName, _id } = jwtDecode<userType>(token);
      setUserData({ userName, _id });
    } else {
      navigate("/auth");
    }
  }, [token]);

  return (
    <div className="flex justify-between w-[100%] h-[10vh] lg:h-[120px] items-center border-b-[1px] border-[#00000030] box-content min-w-[310px] relative">
      <a href="/" className="text-4xl lg:text-5xl font-bold w-[170px]">
        Rewind
      </a>
      <div className="relative hidden sm:block">
        <input
          type="text"
          className="w-[24vw] h-[40px] rounded-2xl pl-4 focus:outline-primary placeholder:text-transparent placeholder:lg:text-[#00000070]"
          placeholder="게시글 내용 또는 태그 검색"
          onKeyDown={search}
        />
        <BiSearch className="absolute right-2 text-2xl top-2 cursor-pointer text-primary" />
      </div>
      <Profile
        inHeader={true}
        userName={userData.userName}
        _id={userData._id}
      />
    </div>
  );
};

export default Header;
