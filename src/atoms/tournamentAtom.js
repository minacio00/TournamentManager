import { atom } from "recoil";

export const Event = atom({
    key: "eventNameAtom",
    default: ""
});

export const Participants = atom({
    key: "eventParticipants",
    default: 4
});
export const date = atom({
    key: "eventDate",
    default: ""
});
export const tournamentList = atom({
    key: "allTournamentMatches",
    default: []
});
export const allTournaments = atom({
    key: "allEvents",
    default: []
});
export const loggedUserTournaments = atom({
    key: "currentUserTournaments",
    default: []
});
export const shouldFilterEvents = atom({
    key: "onlyCurrentUserEvents",
    default: false
});
export const sportAtom = atom({
    key: "sport",
    default: ""
})
