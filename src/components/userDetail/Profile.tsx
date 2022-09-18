interface Props {
  name: string;
  userName: string;
  postNum: number;
  followerNum: number;
  followingNum: number;
}

const Profile = ({
  name,
  userName,
  postNum,
  followerNum,
  followingNum,
}: Props) => {
  return (
    <div className="flex w-[40%] h-[300px] mx-auto justify-between items-center">
      <div className="text-center">
        <div className="h-[150px] w-[150px] rounded-[50%] bg-primary mx-auto"></div>
        <div className="text-[#00000080]">{name}</div>
        <div className="text-4xl font-thin">{userName}</div>
      </div>
      <div className="w-[1px] h-[200px] border-[1px] border-[#00000050]"></div>
      <div className="w-[150px]">
        <div className="flex justify-between my-6 text-xl">
          <span>posts</span>
          <span>{postNum}</span>
        </div>
        <div className="flex justify-between my-6 text-xl">
          <span>followers</span>
          <span>{followerNum}</span>
        </div>
        <div className="flex justify-between my-6 text-xl">
          <span>following</span>
          <span>{followingNum}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
