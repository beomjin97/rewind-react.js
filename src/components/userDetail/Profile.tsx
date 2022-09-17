interface Props {
  name: string;
  userName: string;
}

const Profile = ({ name, userName }: Props) => {
  return (
    <div className="flex w-[40%] h-[300px] mx-auto justify-between items-center">
      <div className="text-center">
        <div className="h-[150px] w-[150px] rounded-[50%] bg-primary"></div>
        <div className="text-[#00000080]">{name}</div>
        <div className="text-4xl font-thin text-center">{userName}</div>
      </div>
      <div className="w-[1px] h-[200px] border-[1px] border-[#00000050]"></div>
      <div className="w-[150px]">
        <div className="flex justify-between my-6 text-xl">
          <span>posts</span>
          <span>10</span>
        </div>
        <div className="flex justify-between my-6 text-xl">
          <span>followers</span>
          <span>0</span>
        </div>
        <div className="flex justify-between my-6 text-xl">
          <span>following</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
