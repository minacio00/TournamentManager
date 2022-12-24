import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"
import { Event, Participants, date } from "../atoms/tournamentAtom"

// todo: (done) form para criação de um novo evento (num de competidores, nome do evento....)
export const NewEvent = () => {
    const [EventName, setEvent] = useRecoilState(Event);
    const [NumberOfParticipants, setParticipants] = useRecoilState(Participants);
    const [EventDate, setEventDate] = useRecoilState(date);

    const navigate =  useNavigate();
    const handleClick = (e) => {
        e.preventDefault;
        console.log(EventName, "nome do event");
        navigate('/bracket');
        // todo: fazer o post para o backend e então salvar no firebase;
        // alert("hello")
    }
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <form className="mt-8 space-y-6 inline-flex flex-col" method="post" action="/newEvent">
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
                        
                    <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white" onClick={
                        (e) => {

                        }}>
                        Create
                    </button>
                </div>
                
            </form>
        </div>
    )
}