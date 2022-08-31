import { atom } from "recoil";
import { userType } from "./type";

export const userState = atom<userType>({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: { userName: "", _id: "" }, // default value (aka initial value)
});
