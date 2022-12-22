import React from "react";
import { useNavigate} from "react-router-dom";

export const PageTop = () => {

    const navigate =  useNavigate();
    return (
        <div className="flex-col h-[26vh] bg-slate-800 py-16 overflow-hidden justify-items-start items-center border-b border-b-gray-200">
            <header className="text-center">
                <div className="text-white text-xl">
                    <h1>Organize your competetions</h1>
                    <div className="p-8">
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
        </div>
        

    )
}