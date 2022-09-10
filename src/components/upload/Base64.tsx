import React, { Dispatch, SetStateAction } from "react";

interface Props {
  multiple: boolean;
  onDone: any;
  setPhotos: Dispatch<SetStateAction<string[]>>;
}

interface FileInfo {
  name: string;
  type: string;
  size: string;
  base64: string | ArrayBuffer | null;
  file: File;
}

const Base64 = ({ multiple, onDone, setPhotos }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    let allFiles: FileInfo[] = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let imgUrl = URL.createObjectURL(files[i]);
        setPhotos((prev) => [...prev, imgUrl]);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
          let fileInfo: FileInfo = {
            name: file.name,
            type: file.type,
            size: Math.round(file.size / 1000) + " kB",
            base64: reader.result,
            file: file,
          };

          allFiles.push(fileInfo);

          // @ts-ignore
          if (allFiles.length === files.length) {
            if (multiple) {
              onDone(allFiles);
            } else {
              onDone(allFiles[0]);
              console.log("allFiles", allFiles);
            }
          }
        };
      }
    }
  };

  return (
    <input
      className="hidden"
      accept="image/jpg,image/png,image/jpeg"
      id="input-file"
      type="file"
      onChange={handleChange}
      multiple={multiple}
    />
  );
};

export default Base64;
