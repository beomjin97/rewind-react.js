import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
//@ts-ignore
import FileBase from "react-file-base64";
import Base64 from "./Base64";

interface Props {
  handleChange: ({ base64 }: { base64: string | ArrayBuffer | null }) => void;
  setPhotos: Dispatch<SetStateAction<string[]>>;
}

const InputFiles = ({ handleChange, setPhotos }: Props) => {
  return (
    <>
      <label
        htmlFor="input-file"
        className="w-[50%] h-[60vh] cursor-pointer border-dashed border-[#00000050] border-[1px] flex flex-col  justify-center items-center"
      >
        <MdOutlineAddPhotoAlternate className="text-primary text-6xl" />
        <p className="text-primary text-xl">
          Click the button to select a picture.
        </p>
        <p className="text-primary text-xl">
          최대 5장 까지 업로드 할 수 있습니다.
        </p>
        <Base64 onDone={handleChange} multiple setPhotos={setPhotos} />
      </label>
    </>
  );
};

export default InputFiles;
