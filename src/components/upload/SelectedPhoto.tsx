import React from "react";

interface Props {
  photo: string;
}

const SelectedPhoto = ({ photo }: Props) => {
  return (
    <div className="w-[150px] h-[150px] overflow-hidden m-3">
      <img src={photo} alt="test" />
    </div>
  );
};

export default SelectedPhoto;
