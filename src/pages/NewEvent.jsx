import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"
import { Event, Participants, date, tournamentList, allTournaments } from "../atoms/tournamentAtom"
import { Select } from "../compenents/Select";

export const NewEvent = () => {
    const [EventName, setEvent] = useRecoilState(Event);
    const [NumberOfParticipants, setParticipants] = useRecoilState(Participants);
    const [EventDate, setEventDate] = useRecoilState(date);
    const [matches, setMatches] = useRecoilState(tournamentList);
    const [Tournaments,setAlltournaments] = useRecoilState(allTournaments);
    const navigate =  useNavigate();
    const newTourney = [];
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('/newevent', {
            method: "POST", mode: "cors", headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'EventName': EventName,
                'NumberOfParticipants': NumberOfParticipants,
                'EventDate': EventDate
            })
        }).then((res) => {
            res.json().then((data) => newTourney.push(...data))
                .then(() => { setMatches(newTourney) ; localStorage.setItem('newEvent', JSON.stringify(newTourney)) })
                .then(() => {
                    setAlltournaments([...Tournaments, {
                        'Name': EventName,
                        'date': EventDate,
                        'matches': matches,
                        'participants': NumberOfParticipants
                    }]);
                })
                .then(() => navigate('/bracket'));
        }).catch((e) => console.error(e));
    }
   
    
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <form className="mt-8 space-y-6 inline-flex flex-col" method="post" onSubmit={(e) => handleSubmit(e)} >
                <div className="space-y-4">
                    <div>
                        <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Event name" name="Event" id="event"
                            onChange={(e) => setEvent(e.target.value)} required />
                    </div>
                    <Select />
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