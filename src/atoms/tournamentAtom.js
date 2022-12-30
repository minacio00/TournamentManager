import { atom } from "recoil";

export const Event = atom({
    key: "eventNameAtom",
    default: ""
});

export const Participants = atom({
    key: "eventParticipants",
    default: -1
});
export const date = atom({
    key: "eventDate",
    default: ""
});
export const tournamentList = atom({
    key: "allEvents",
    default: []
});
