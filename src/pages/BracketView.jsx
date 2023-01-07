import { useRecoilState, useRecoilValue } from "recoil";
import { Event, Participants, date, tournamentList } from "../atoms/tournamentAtom";
import { SingleEliminationBracket, Match, SVGViewer } from "@g-loot/react-tournament-brackets";
import {simpleSmallBracket} from "../sampleData"
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
    if (matches === undefined) {
        return <div className="App">Carregando...</div>;
    }
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <SingleEliminationBracket
                matches={matches}
                matchComponent={Match}

            />
        </div>
    )
 }