import { useState, useEffect } from "react";
import Menu from "../components/home/Menu";
import Post from "../components/home/Post";
import Sidebar from "../components/home/Sidebar";
import { getPost, getTags } from "../api";
import { MdOutlineImageNotSupported } from "react-icons/md";

import { PostType } from "../type";

const Home = () => {
  const [postData, setPostData] = useState<PostType[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    getPost().then((res) => {
      setPostData(res.data);
    });
    getTags().then((res) => {
      setTags(res.data);
      console.log("tag", res.data);
    });
  }, []);

  return (
    <div className="flex justify-between lg:justify-center">
      <Sidebar isVisible={isVisible} tags={tags} />
      <div>
        <Menu setIsVisible={setIsVisible} />
        <div
          className={`max-h-[calc(100vh-121px)] scrollbar-hide ${
            postData.length === 0 ? "overflow-hidden" : "overflow-y-auto"
          }`}
        >
          {postData.length === 0 ? (
            <div className="w-[calc(100vw-24px)] max-w-[660px] text-center h-[100vh]">
              <MdOutlineImageNotSupported className="mx-auto mt-20 text-primary text-9xl" />
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
