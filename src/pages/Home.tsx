import { useState, useEffect } from "react";
import Menu from "../components/home/Menu";
import Post from "../components/home/Post";
import Sidebar from "../components/home/Sidebar";
import { getPost } from "../api";

interface PostType {
  _id: string;
  content: string;
  author: string;
  imgUrl?: string[];
  like?: string[];
  tags?: string[];
  comment?: string[];
  createdAt: Date;
  updatedAt?: Date;
}

const Home = () => {
  const [postData, setPostData] = useState<PostType[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    getPost().then((res) => {
      setPostData(res.data);
      console.log(postData);
    });
  }, []);

  return (
    <div className="flex lg:justify-between justify-center ">
      <Sidebar isVisible={isVisible} />
      <div>
        <Menu setIsVisible={setIsVisible} />
        <div className="max-h-[calc(100vh-121px)] overflow-y-auto scrollbar-hide">
          {postData.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
