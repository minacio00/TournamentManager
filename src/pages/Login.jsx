import { useState } from "react";

export const Login = () => {
    // todo: adicionar useEfect para buscar o usuário assim que montar a página
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const handleClick = async () => {
        console.log(email, "????")
        await fetch('http://localhost:3000' + '/signin', {
            method: "POST", mode: "cors", headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                'userEmail': email,
                'password': password
            })
        })
        .then(res => res.json())
        .then((data) => {
            localStorage.setItem('userSession', JSON.stringify(data));
        })
        .catch((e) => console.log(e));
        
    }
    return(
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex items-center w-full justify-center" >
            <div className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()} >
                <form className=" flex flex-col space-y-4">
                    <input className=
                        "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 focus:z-10 sm:text-sm"
                        placeholder="email" name="email" id="email" type={'email'}
                        onChange={(e) => setemail(e.target.value)} required />

                    <input className=
                        "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 focus:z-10 sm:text-sm"
                        placeholder="Password" name="password" id="password" type='password'
                        onChange={(e) => setpassword(e.target.value)} required />

                    <button onClick={() => handleClick()} className="h-10 mx-auto px-6 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-400">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}