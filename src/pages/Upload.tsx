import React, { useRef, useState } from "react";
import InputFiles from "../components/upload/InputFiles";
import SelectedPhoto from "../components/upload/SelectedPhoto";
import { useNavigate } from "react-router-dom";

import { createPost } from "../api";
import ChipInput from "../components/upload/ChipInput";

const Upload = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [base64, setBase64] = useState<string | ArrayBuffer | null>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");

  const navigate = useNavigate();
  const chipInput = useRef<HTMLInputElement>(null);

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
    setTags([]);
  };

  const submit = async () => {
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

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (content.length === 100) {
      alert("100자까지만 입력할 수 있습니다.");
      setContent((prev: string) => prev.slice(0, 100));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTags((prev) => [...prev, tag]);
      setTag("");
    }
  };

  return (
    <>
      <div className="bg-[#FFFBFB] lg:w-[80%] mx-auto py-10 mt-10 mb-10">
        <div className="mx-auto w-[90%]">
          <h1 className="font-bold text-4xl">Upload Post</h1>
          <h3 className="text-[#d9d9d9]">
            rewind your memory with <span className="text-primary">Rewind</span>
          </h3>
          <div className="flex mt-8 justify-between">
            {photos.length === 0 ? (
              <InputFiles handleChange={handleChange} setPhotos={setPhotos} />
            ) : (
              <div className="w-[50%] h-[60vh] flex flex-wrap border-dashed border-[#00000050] border-[1px]">
                {photos.map((photo, idx) => (
                  <SelectedPhoto
                    key={idx}
                    idx={idx}
                    photo={photo}
                    setPhotos={setPhotos}
                  />
                ))}
              </div>
            )}
            <div className="w-[40%]">
              <div className="relative">
                <div className="text-xl font-bold mb-2">
                  Please add a content
                </div>
                <div className="absolute right-1 bottom-12">
                  {content.length}/100
                </div>
                <textarea
                  className="border-[1px] border-[#00000030] focus:outline-primary mb-10 pl-3 w-[100%]"
                  cols={40}
                  rows={5}
                  style={{ resize: "none" }}
                  placeholder="최대 100자까지 입력할 수 있습니다."
                  value={content}
                  onChange={handleContent}
                ></textarea>
              </div>
              <div className="text-xl font-bold mb-2">Please add tags</div>
              <div
                className={`h-10 w-full mb-10 overflow-x-auto flex items-center scrollbar-hide border-[1px] border-[#00000030] ${
                  document.activeElement === chipInput.current &&
                  "border-primary border-[2px]"
                }`}
              >
                {tags.map((tag, idx) => (
                  <div
                    className="ml-2 px-2 rounded-lg h-7 bg-[#cbcbcb] flex items-center flex-none"
                    key={idx}
                  >
                    <div className="inline">{tag}</div>
                    <div
                      className="cursor-pointer inline bg-[#7c7c7c] rounded-[50%] w-[20px] h-[20px] leading-5 text-center ml-1 "
                      onClick={() => {
                        setTags((prev) =>
                          prev.filter((item, _idx) => _idx !== idx)
                        );
                      }}
                    >
                      &times;
                    </div>
                  </div>
                ))}
                <input
                  type="text"
                  className="pl-2 outline-none"
                  placeholder="엔터로 구분"
                  ref={chipInput}
                  value={tag}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                />
              </div>
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
    </>
  );
};

export default Upload;
