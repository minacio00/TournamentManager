import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"
import {
    Event, Participants,
    date, tournamentList,
    allTournaments, sportAtom
} from "../atoms/tournamentAtom"
import { Select } from "../compenents/Select";
import { SpinnerDotted } from "spinners-react";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const NewEvent = () => {
    const [EventName, setEvent] = useRecoilState(Event);
    const [NumberOfParticipants, setParticipants] = useRecoilState(Participants);
    const [EventDate, setEventDate] = useRecoilState(date);
    const [matches, setMatches] = useRecoilState(tournamentList);
    const [sport, setSport] = useRecoilState(sportAtom);
    const [Tournaments,setAlltournaments] = useRecoilState(allTournaments);
    const [SpinnerHidden, setSpinnerHidden] = useState(true)
    const navigate =  useNavigate();
    const newTourney = [];
    
    useEffect(() => {
        if (!(getAuth().currentUser)) {
            navigate('/login');
            // console.log(getAuth().currentUser);
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinnerHidden(!SpinnerHidden);
        await fetch('http://localhost:3000'+'/newevent', {
            method: "POST", mode: "cors", headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'EventName': EventName,
                'NumberOfParticipants': NumberOfParticipants,
                'EventDate': EventDate,
                'Sport': sport,
                'confirmed': 0,
                'createdBy': getAuth().currentUser.uid
            })
        }).then((res) => {
            res.json().then((data) => {newTourney.push(...data);setMatches(newTourney)})
                .then(() => { localStorage.setItem('newEvent', JSON.stringify(newTourney)) })
                .then(() => {
                    setAlltournaments([...Tournaments, {
                        'Name': EventName,
                        'date': EventDate,
                        'matches': newTourney,
                        'NumberOfParticipants': parseInt(NumberOfParticipants),
                        'confirmed': 0,
                        'sport': sport
                    }]);
                })
                .then(() => navigate(`/event/${EventName}/bracket`))
                .then(() => {
                    setSpinnerHidden(!SpinnerHidden);
                });
        }).catch((e) => console.error(e));
    }
   
    
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <form className="mt-8 space-y-6 flex flex-col" method="post" onSubmit={(e) => handleSubmit(e)} >
                <div className="space-y-4">
                    <div>
                        <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 focus:z-10 sm:text-sm"
                            placeholder="Event name" name="Event" id="event"
                            onChange={(e) => setEvent(e.target.value)} required />
                    </div>
                    <div>
                        <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 focus:z-10 sm:text-sm"
                            placeholder="Game or sport" name="Event" id="event"
                            onChange={(e) => setSport(e.target.value)} required />
                    </div>
                    <Select />
                    <input className=
                        "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 ring-1 focus:z-10 sm:text-sm"
                        placeholder="Event date" name="date" id="eventDate" type="date" required
                        onChange={(e) => setEventDate(e.target.value)} />
                </div>
                <button type="submit" hidden={!SpinnerHidden} className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white  hover:bg-blue-400">
                    Create
                </button>
                <SpinnerDotted className='mx-auto' hidden={SpinnerHidden} size={50} thickness={100} speed={120} color="rgba(57, 159, 172, 1)" />
            </form>
        </div>
    )
}