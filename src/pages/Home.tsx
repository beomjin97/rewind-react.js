import { useState, useEffect } from "react";
import Menu from "../components/home/Menu";
import Post from "../components/home/Post";
import Sidebar from "../components/home/Sidebar";
import { getPost, getTags, getPostByTag } from "../api";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

import { PostType } from "../type";

const Home = () => {
  const [postData, setPostData] = useState<PostType[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const tag = searchParams.get("tag");
    if (tag) {
      getPostByTag(tag).then((res) => {
        setPostData(res.data);
      });
    } else {
      getPost().then((res) => {
        setPostData(res.data);
      });
    }
    getTags().then((res) => {
      setTags(res.data);
    });
  }, [searchParams]);

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
