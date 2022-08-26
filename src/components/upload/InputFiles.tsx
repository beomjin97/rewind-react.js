import React from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFiles = ({ handleChange }: Props) => {
  return (
    <>
      <label
        htmlFor="input-file"
        className="w-[50%] h-[60vh] cursor-pointer border-dashed border-[#00000050] border-[1px] flex flex-col  justify-center items-center"
      >
        <MdOutlineAddPhotoAlternate className="text-primary text-6xl" />
        <p className="text-primary text-xl">
          select picture to click plus button.
        </p>
        <p className="text-primary text-xl">
          최대 5장 까지 업로드 할 수 있습니다.
        </p>
      </label>
      <input
        type="file"
        id="input-file"
        className="hidden"
        onChange={handleChange}
        multiple
      />
    </>
  );
};

export default InputFiles;
