import { useRecoilState, useRecoilValue } from "recoil";
import { Event, Participants, date, tournamentList } from "../atoms/tournamentAtom";
import { SingleEliminationBracket, Match, SVGViewer } from "@g-loot/react-tournament-brackets";
import { useWindowSize } from "../hooks/useWindowSize";
import {cloneDeep} from "lodash"
import { useEffect } from "react";



export const BracketView = () => {
    const { width, height } = useWindowSize();
    const [EventName, setEvent] = useRecoilState(Event);
    const [matches, setMatches] = useRecoilState(tournamentList);
    // console.log(EventName, "nome do evento");
    // console.debug(matches, "partidas");
    // const matchesCopy = _.cloneDeep(matches); // se for feita shallow copy disso daqui o componente que monta a chave quebra
    // todo: persistir o estado
    useEffect(() => {
        if (matches.length == 0){
            setMatches(JSON.parse(window.localStorage.getItem('newEvent')));
        }
    })
    
    if (matches.length !== 0) {
        return (
            <div className=" bg-slate-800 min-h-screen min-w-full text-white
            flex flex-col justify-center" >
                <SingleEliminationBracket
                    matches={matches}
                    matchComponent={Match}
    
                />
            </div>
        )
    }
 }