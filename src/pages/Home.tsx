import { useState, useEffect } from "react";
import Menu from "../components/home/Menu";
import Post from "../components/home/Post";
import Sidebar from "../components/home/Sidebar";
import { getPost } from "../api";
import { MdOutlineImageNotSupported } from "react-icons/md";

import { PostType } from "../type";

const Home = () => {
  const [postData, setPostData] = useState<PostType[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    getPost().then((res) => {
      setPostData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="flex justify-between lg:justify-center">
      <Sidebar isVisible={isVisible} />
      <div>
        <Menu setIsVisible={setIsVisible} />
        <div
          className={`max-h-[calc(100vh-121px)] scrollbar-hide ${
            postData.length === 0 ? "overflow-hidden" : "overflow-y-auto"
          }`}
        >
          {postData.length === 0 ? (
            <div className="w-[calc(100vw-24px)] max-w-[660px] text-center h-[100vh]">
              <MdOutlineImageNotSupported className="text-primary mx-auto text-9xl mt-20" />
              <p className="text-3xl font-thin">No Post not yet</p>
            </div>
          ) : (
            postData.map((post) => <Post post={post} key={post._id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
