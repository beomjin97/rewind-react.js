import React, { Dispatch, SetStateAction } from "react";

interface Props {
  photo: string;
  setPhotos: Dispatch<SetStateAction<string[]>>;
  idx: number;
}

const SelectedPhoto = ({ photo, setPhotos, idx }: Props) => {
  const handleClick = () => {
    setPhotos((prev) => prev.filter((_, index) => index !== idx));
  };

  console.log("idx", idx);

  return (
    <div
      className="w-[150px] h-[150px] overflow-hidden m-3 cursor-pointer"
      onClick={handleClick}
    >
      <img src={photo} alt="test" />
    </div>
  );
};

export default SelectedPhoto;
