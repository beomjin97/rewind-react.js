import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import ProfileMenu from "./ProfileMenu";

interface user {
  userName: string;
  _id: string;
}

interface props {
  inHeader: boolean;
}

const Profile = ({ inHeader }: props) => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState<user>({ userName: "", _id: "" });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      const { userName, _id } = jwtDecode<user>(token);
      setUserData({ userName, _id });
    } else {
      navigate("/auth");
    }
  }, [token]);
  return (
    <div
      className={`${
        inHeader ? "flex-row-reverse items-center" : ""
      } w-[170px] flex mb-1 cursor-pointer relative`}
    >
      {inHeader ? (
        <>
          <IoIosArrowDown
            className={`text-primary text-2xl ${isOpen && "rotate-180"}`}
            onClick={() => {
              if (setIsOpen) {
                setIsOpen((prev) => !prev);
              }
            }}
          />
          <div
            className="max-w-[130px] font-bold text-lg leading-10 truncate"
            onClick={() => navigate(`/user/${userData._id}`)}
          >
            {userData.userName}
          </div>
          <div
            className="w-[40px] h-[40px] rounded-[20px] bg-primary mr-1 "
            onClick={() => navigate(`/user/${userData._id}`)}
          ></div>
        </>
      ) : (
        <>
          <div
            className="w-[40px] h-[40px] rounded-[20px] bg-primary mr-1 "
            onClick={() => navigate(`/user/${userData._id}`)}
          ></div>
          <div
            className="max-w-[130px] font-bold text-lg leading-10 truncate right-0"
            onClick={() => navigate(`/user/${userData._id}`)}
          >
            {userData.userName}
          </div>
        </>
      )}
      {isOpen && <ProfileMenu _id={userData._id} />}
    </div>
  );
};

export default Profile;
