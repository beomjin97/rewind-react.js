import React, { useState } from "react";
import InputFiles from "../components/upload/InputFiles";
import SelectedPhoto from "../components/upload/SelectedPhoto";
import { useNavigate } from "react-router-dom";
//import imageCompression from "browser-image-compression";

import { createPost } from "../api";

const Upload = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [base64, setBase64] = useState<string | ArrayBuffer | null>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const navigate = useNavigate();
  // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     for (let i = 0; i < e.target.files.length; i++) {
  //       let file = e.target.files[i];
  //       //photo
  //       const url = URL.createObjectURL(file);
  //       setPhotos((prev) => [...prev, url]);

  //       //base64
  //       let compressedFile = await imageCompression(file, {
  //         maxSizeMB: 0.2,
  //         maxWidthOrHeight: 1920,
  //         useWebWorker: true,
  //       });
  //       let reader = new FileReader();
  //       reader.readAsDataURL(compressedFile);
  //       reader.onloadend = () => setBase64((prev) => [...prev, reader.result]);
  //     }
  //     console.log(photos);
  //   }
  // };

  const handleChange = ({
    base64,
  }: {
    base64: string | ArrayBuffer | null;
  }) => {
    setBase64(base64);
  };

  const cancel = () => {
    setPhotos([]);
    setBase64("");
    setContent("");
    setTags("");
  };

  const submit = async () => {
    // const formData = new FormData();
    // formData.append("content", content);
    // formData.append("tags", tags);
    // formData.append("files", JSON.stringify(base64));
    // console.log("files", JSON.stringify(base64));
    try {
      const res = await createPost({
        content,
        tags,
        files: base64,
      });
      console.log(res.data);
      alert("업로드 되었습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="bg-[#FFFBFB] lg:w-[80%] mx-auto py-10 mt-10 mb-10">
        <div className="mx-auto w-[90%]">
          <h1 className="font-bold text-4xl">Upload Post</h1>
          <h3 className="text-[#d9d9d9]">
            rewind your memory with <span className="text-primary">Rewind</span>
          </h3>
          <div className="flex mt-8 justify-between">
            {photos.length === 0 ? (
              <InputFiles handleChange={handleChange} />
            ) : (
              <div className="flex flex-wrap">
                {photos.map((photo) => (
                  <SelectedPhoto photo={photo} />
                ))}
              </div>
            )}
            <div className="w-[40%]">
              <div className="text-xl font-bold mb-2">Please add a content</div>
              <textarea
                className="border-[1px] border-[#00000030] focus:outline-primary mb-10 pl-3 w-[100%]"
                cols={40}
                rows={5}
                style={{ resize: "none" }}
                placeholder="최대 50자까지 입력할 수 있습니다."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="text-xl font-bold mb-2">Please add tags</div>
              <input
                type="text"
                className="border-[1px] border-[#00000030] focus:outline-primary w-[100%] pl-3 mb-10"
                placeholder="태그를 쉼표로 구분해주세요"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  className="border-[1px] text-2xl px-6 hover:bg-[#000] hover:text-white"
                  onClick={cancel}
                >
                  cancel
                </button>
                <button
                  className="border-[1px] text-2xl px-6 text-primary hover:bg-primary hover:text-white"
                  onClick={submit}
                >
                  upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
