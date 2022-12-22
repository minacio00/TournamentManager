import React from "react";
import { useNavigate} from "react-router-dom";

export const PageTop = () => {

    const navigate =  useNavigate();
    return (
        <div className="flex flex-col w-screen h-screen py-16 overflow-y-hidden justify-items-start items-center">
            <header className="text-center">
                <div className="text-white text-xl flex-col">
                    <h1>Organize your competetions</h1>
                    <div className="flex p-4">
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center
                                justify-center rounded-md
                                border border-transparent
                                bg-blue-500 px-5 py-3 text-base
                                font-medium text-white hover:bg-blue-400"
                                onClick={() => navigate('/newevent')} >

                                Novos eventos
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center
                                justify-center rounded-md
                                border border-transparent
                                bg-blue-500 px-5 py-3 text-base
                                font-medium text-white hover:bg-blue-400" >
                                Encontre eventos 
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <hr className="w-full" />
        </div>

    )
}