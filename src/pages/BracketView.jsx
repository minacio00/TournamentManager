import { useRecoilState, useRecoilValue } from "recoil";
import { Event, Participants, date, tournamentList, allTournaments } from "../atoms/tournamentAtom";
import { SingleEliminationBracket, Match, SVGViewer } from "@g-loot/react-tournament-brackets";
import { useWindowSize } from "../hooks/useWindowSize";
import {cloneDeep} from "lodash"
import { useEffect } from "react";
import { useParams } from "react-router-dom";



export const BracketView = () => {
    const { width, height } = useWindowSize();
    // const [EventName, setEvent] = useRecoilState(Event);
    const [matches, setMatches] = useRecoilState(tournamentList); // usar o outro estado
    const currentEventName = useParams().name
    const tournaments = useRecoilValue(allTournaments);
    const currentEventIndex =  tournaments.findIndex((value) => value.eventName == currentEventName);
    const tournamentsClone = cloneDeep(tournaments[currentEventIndex]);

    console.log(tournaments)
    useEffect(() => {
        if (tournaments[currentEventIndex].matches.length == 0){
            setMatches(JSON.parse(window.localStorage.getItem('newEvent')));
        }
    },[])
    
    if (tournaments[currentEventIndex].matches.length !== 0) {
        return (
            <div className=" bg-slate-800 min-h-screen min-w-full text-white
            flex flex-col justify-center" >
                <SingleEliminationBracket
                    matches={tournamentsClone.matches}
                    matchComponent={Match}
    
                />
            </div>
        )
    }
 }