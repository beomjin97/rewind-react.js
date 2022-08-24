import { useState } from "react";
import Menu from "../components/home/Menu";
import Post from "../components/home/Post";
import Sidebar from "../components/home/Sidebar";

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="flex lg:justify-between justify-center ">
      <Sidebar isVisible={isVisible} />
      <div>
        <Menu setIsVisible={setIsVisible} />
        <div className="max-h-[calc(100vh-121px)] overflow-y-auto scrollbar-hide">
          <Post postId="1" />
          <Post postId="1" />
          <Post postId="1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
