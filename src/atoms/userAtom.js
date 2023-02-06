import { atom } from "recoil";

export const User = atom({
    key: "user",
    default: {}
})
export const islogged = atom({
    key: "loggedUser",
    default: false
})