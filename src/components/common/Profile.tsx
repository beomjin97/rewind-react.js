import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface user {
  userName: string;
  _id: string;
}

const Profile = () => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState<user>({ userName: "", _id: "" });
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      const { userName, _id } = jwtDecode<user>(token);
      setUserData({ userName, _id });
    } else {
      navigate("/auth");
    }
  }, [token, navigate]);

  return (
    <div className="w-[170px] flex justify-between">
      <div className="w-[40px] h-[40px] rounded-[20px] bg-primary"></div>
      <div className="max-w-[130px] font-bold text-lg leading-10 truncate">
        {userData.userName}
      </div>
    </div>
  );
};

export default Profile;
