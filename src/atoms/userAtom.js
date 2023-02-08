import { getAuth } from "firebase/auth";
import { atom, selector } from "recoil";
import { firebaseApp } from "../firebaseConfig";

export const User = atom({
    key: "user",
    default: {}
})
export const islogged = atom({
    key: "islogged",
    default: getAuth(firebaseApp).currentUser != null
})
