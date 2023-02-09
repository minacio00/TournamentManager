import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { BracketView } from "../pages/BracketView";

export const PageTop = () => {
    const handleClick = async () => {
        await fetch('https://tournament-manager-api.onrender.com' + '/tournaments/view', {
            method: "GET", mode: "cors", headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                res.json().then((data) => {
                    setAlltournaments(data);
                    console.log("reading db")
                    localStorage.setItem('allEvents', JSON.stringify(data));
                });
                // setAlltournaments(res.json());
            })
    }
    const navigate =  useNavigate();
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
                                onClick={() => handleclick()}
                                className="inline-flex items-center
                                justify-center rounded-md
                                border border-transparent
                                bg-blue-500 px-5 py-3 text-base
                                font-medium text-white hover:bg-blue-400" >
                                Your events
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        

    )
}