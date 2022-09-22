import React, { Dispatch } from "react";

interface Props {
  menu: string;
  setMenu: Dispatch<React.SetStateAction<string>>;
}

const Menu = ({ menu, setMenu }: Props) => {
  const arr = ["post", "liked", "followers", "following"];

  return (
    <div className="w-full border-t-[1px] border-[#00000050]">
      <ul className="flex md:w-full w-[500px] justify-around text-xl mx-auto my-4">
        {arr.map((item, idx) => (
          <li
            key={idx}
            className={`font-light hover:underline hover:font-medium ${
              menu === item && "font-medium"
            }`}
            onClick={() => setMenu(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
