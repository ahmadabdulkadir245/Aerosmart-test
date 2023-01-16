import { selector } from "recoil";
import { nameState } from "../atoms/name";
import {navHandler} from '../atoms/navHandler'

export const navState = selector({
  key: "navState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const isNavOpen = get(navHandler);
    const changedNavState = !isNavOpen
    return lengthOfName;
  },
});