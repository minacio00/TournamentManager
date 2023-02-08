import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil";
import { allTournaments } from "../atoms/tournamentAtom";
import { SpinnerDotted } from "spinners-react";
import _ from "lodash";

export const Register = () => {
    const eventName = useParams().name;
    const [nickName,setNickName] = useState();
    const [allEvents, setAllEvents] = useRecoilState(allTournaments);
    const [SpinnerHidden, setSpinnerHidden] = useState(true); 
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        setSpinnerHidden(!SpinnerHidden);
        const currentEventIndex = allEvents.findIndex((value) => value.eventName === eventName);

        if(allEvents[currentEventIndex].confirmed < allEvents[currentEventIndex].NumberOfParticipants){
            let clone = _.clone(allEvents);
            await fetch('http://localhost:3000'+`/register/${nickName}`, {
                method: "POST", mode: "cors", headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'currentEvent': allEvents[currentEventIndex]
                })
            }).then((res) => res.json().then((data) => {
                clone[currentEventIndex] = data;
                // clone[currentEventIndex].confirmed++; // colocar a responsabilidade de incrementar no backend
                localStorage.setItem('allEvents',JSON.stringify(clone));
                 setAllEvents(clone);
            })).then(() => {
                setSpinnerHidden(!SpinnerHidden);
                navigate('/');
            }) // setar estado
            .catch((e) => console.log(e));
        }
        else{
            alert('this event is full');
        }
    }

    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center ml-[80px]  w-full justify-center" >
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
                <div className={SpinnerHidden ? "flex space-x-2" : "hidden space-x-2" }>
                    <button hidden={!SpinnerHidden} type="submit" className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white">
                        Register
                    </button>
                    <Link to={'bracket'} className="h-10 px-6 flex items-center font-semibold rounded-md bg-blue-500 text-white"> View bracket</Link>
                </div>
                <SpinnerDotted className='mx-auto' hidden={SpinnerHidden} size={50} thickness={100} speed={120} color="rgba(57, 159, 172, 1)" />
            </form>
        </div>
    )
}