import { useState } from "react";
import { useParams } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil";
import { allTournaments } from "../atoms/tournamentAtom";
import { cloneDeep } from "lodash";

export const Event = () => {
    const eventName = useParams().name;
    const [nickName,setNickName] = useState();
    const [allEvents, setAllEvents] = useRecoilState(allTournaments);
    

    const handleRegistration = (e) => {
        e.preventDefault();
        let currentEvent = allEvents.findIndex((value) => value.Name === eventName);

        //todo: implementar lógica de posicionar o participante na chave no backend
        if(allEvents[currentEvent].confirmed < allEvents[currentEvent].participants){
            let clone = cloneDeep(allEvents);
            clone[currentEvent].confirmed++;
            setAllEvents(clone);
            console.log(clone);
        }
        // console.debug(currentEvent.confirmed, "participantes confirmados")
    }

    
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <header>Register for {eventName} </header>
            <form className="mt-8 space-y-6 inline-flex flex-col" method="post" onSubmit={(e) => handleRegistration(e)} >
                <div className="space-y-4">
                    <div>
                        <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Nickname/team name" name="Event" id="event"
                            onChange={(e) => setNickName(e.target.value)} required />
                    </div>
                </div>
                <button type="submit" className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white">
                    Continue
                </button>

            </form>
        </div>
    )
}