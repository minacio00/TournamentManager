import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { allTournaments, loggedUserTournaments, shouldFilterEvents } from "../atoms/tournamentAtom";
import { firebaseApp } from "../firebaseConfig";
import { BracketView } from "../pages/BracketView";

export const PageTop = () => {
    const setAlltournaments = useSetRecoilState(allTournaments);
    const [myEvents, setmyEvents] = useRecoilState(loggedUserTournaments);
    const [changeEvents, setchangeEvents] = useRecoilState(shouldFilterEvents);
    const [filterBtnText, setfilterBtnText] = useState("Your Events")
    const handleClick = async () => {
        setchangeEvents(!changeEvents);
    //     const userUid = getAuth(firebaseApp).currentUser.uid;
    //     console.log(userUid, "uid");
    //     await fetch('http://localhost:3000' + '/tournaments/view'+`/${userUid}`, {
    //         method: "GET", mode: "cors", headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then((res) => {
    //             res.json().then((data) => {
    //                 setAlltournaments(data);
    //                 console.log("do usuário atual");
    //                 localStorage.setItem('allEvents', JSON.stringify(data));
    //             });
    //             // setAlltournaments(res.json());
    //         })
    }
    useEffect(() => {
        if (changeEvents){
            setfilterBtnText("All Events");
        }
        else{
            setfilterBtnText("Your Events");
        }
    }, [changeEvents])
    

    return (
        <div className="flex-col min-h-[30vh] shadow-lg bg-slate-800 py-16 overflow-hidden
        justify-items-start
        items-center border-b border-b-gray-500">
            <header className="text-center">
                <div className="text-white text-xl">
                    <h1>Organize your competitions </h1>
                    <div className="p-8">
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link
                                to={'newevent'}
                                className="inline-flex items-center
                                justify-center rounded-md
                                border border-transparent
                                bg-blue-500 px-5 py-3 text-base
                                font-medium text-white hover:bg-blue-400"
                            >
                                New event
                            </Link>

                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <button
                                onClick={() => handleClick()}
                                className="inline-flex items-center
                                justify-center rounded-md
                                border border-transparent
                                bg-blue-500 px-5 py-3 text-base
                                font-medium text-white hover:bg-blue-400" >
                               {filterBtnText}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        

    )
}