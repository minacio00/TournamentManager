import { useRecoilState, useRecoilValue } from "recoil";
import { Event, Participants, date } from "../atoms/tournamentAtom";
import { SingleEliminationBracket, Match, SVGViewer } from "@g-loot/react-tournament-brackets";
import {simpleSmallBracket} from "../sampleData"
import { useWindowSize } from "../hooks/useWindowSize";


export const BracketView = () => {
    const {width, height} =  useWindowSize();
    const [EventName, setEvent] = useRecoilState(Event);
    console.log(width+" "+ height, "tamanho da tela");
    
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <SingleEliminationBracket
                matches={simpleSmallBracket}
                matchComponent={Match}
                
            />
        </div>
    )
 }