import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"
import { Event, Participants, date, tournamentList } from "../atoms/tournamentAtom"
import { BracketView } from "./BracketView";

export const NewEvent = () => {
    const [EventName, setEvent] = useRecoilState(Event);
    const [NumberOfParticipants, setParticipants] = useRecoilState(Participants);
    const [EventDate, setEventDate] = useRecoilState(date);
    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useRecoilState(tournamentList);
    const navigate =  useNavigate();
    const newTourney = [];
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      await fetch('/newevent',{method: "POST", mode: "cors", headers: {
            'Content-Type': 'application/json'},
            body: JSON.stringify({
                'EventName': EventName,
                'NumberOfParticipants': NumberOfParticipants,
                'EventDate': EventDate
            })
        }).then((res) => {
            res.json().then((data) => newTourney.push(...data))
            .then(()=> setMatches([...matches,...newTourney]))
            .then(() => navigate('/bracket'));
        }).catch((e) => console.error(e));

        console.log(newTourney);
        console.log(matches.length, "matches");
 
        // todo: /bracket precisa fazer outro fetch
        // todo: fazer o post para o backend e então salvar no firebase;
    }
   
    
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <h1>{matches.length}</h1>
            <h1>{newTourney.length}</h1>
            <form className="mt-8 space-y-6 inline-flex flex-col" method="post" onSubmit={(e) => handleSubmit(e)} >
                <div className="space-y-4">
                    <div>
                        <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Event name" name="Event" id="event"
                            onChange={(e) => setEvent(e.target.value)} required />
                    </div>
                    <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Max n° of participants" name="num" id="num" type="number" min="0" required
                            onChange={(e) => setParticipants(e.target.value)} />
                    <input className=
                        "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Event date" name="date" id="eventDate" type="date" required
                        onChange={(e) => setEventDate(e.target.value)} />
                </div>
                <button type="submit" className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white">
                    Create
                </button>
            </form>
        </div>
    )
}