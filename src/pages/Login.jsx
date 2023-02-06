import { useState } from "react";   
import { AuthForm } from "../compenents/AuthForm";


export const Login = () => {
    const [register, setRegister] = useState(false);
   
    return(
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex items-center w-full justify-center" >
            <span className="flex flex-col">
                <h2 className="mx-auto font-bold">
                    Login / register
                </h2>
                <AuthForm register={register}/>
                <p hidden={register} onClick={() => setRegister(!register)} className="mx-auto py-2 text-white hover:text-blue-600 cursor-pointer">
                    register
                </p>
            </span>
        </div>
    )
}