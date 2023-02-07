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
    console.log(tournaments)
    
    const currentEventIndex =  tournaments.findIndex((value) => value.eventName == currentEventName);
    const tournamentsClone = cloneDeep(tournaments[currentEventIndex]);

    useEffect(() => {
        if (tournaments[currentEventIndex].matches.length == 0){
            setMatches(JSON.parse(window.localStorage.getItem('newEvent')));
        }
    },[])
    
    if (tournaments[currentEventIndex].matches.length !== 0) {
        return (
            <div className=" bg-slate-800 min-h-screen ml-[80px] min-w-fit   text-white
            flex flex-col justify-center" >
                <SingleEliminationBracket
                    matches={tournamentsClone.matches}
                    matchComponent={Match}
                    
                />
            </div>
        )
    }
 }