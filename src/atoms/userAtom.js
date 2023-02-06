import { getAuth } from "firebase/auth";
import { atom, selector } from "recoil";

export const User = atom({
    key: "user",
    default: {}
})
export const islogged = atom({
    key: "islogged",
    default: false
})
