import { atom } from "recoil";

export const userState = atom<string>({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
