import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseApp } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const AuthForm = ({register}) => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [hiddenLabel, sethiddenLabel] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            if(currentUser){
                navigate('/');
            }
        });
       
    },[]);

    const handleClick = async () => {
        const auth = getAuth(firebaseApp);
        if ((!email || email.trim().length === 0) || (!password || password.trim().length === 0)) {
            sethiddenLabel(!hiddenLabel);
            return
        }
        await signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            if (!(result instanceof Error)) {
                navigate('/')
                // console.log(result.user, "teste");
            }
        })
        .catch((e) => {
            console.log(e.code);
            switch (e.code) {
                case "auth/invalid-email":
                    alert("Invalid email or password");
                    break;
                case "auth/wrong-password":
                    alert('Invalid email or password');
                    break;
                default:
                    break;
            }
        })
    };
    const handleRegistration = async () => {
        const auth = getAuth(firebaseApp);
        await createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            if (!(result instanceof Error)) {
                navigate('/')
                console.log(result, "teste");
            }
        })
        .catch((e) => {
            console.log(e.code);
            switch (e.code) {
                case "auth/invalid-email":
                    alert("Invalid email or password");
                    break;
                case "auth/wrong-password":
                    alert('Invalid email or password');
                    break;
                default:
                    break;
            }
        });
    };
    
    if (!register) {
        return (
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
                    <label hidden={hiddenLabel} className="text-sm text-red-600 font-bold">*Insert an email and password</label>
                    <button onClick={() => handleClick()} className="h-10 mx-auto px-6 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500">
                        Log in
                    </button>
                </form>
            </div>
        );
    }
    return (
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
                    <label hidden={hiddenLabel} className="text-sm text-red-600 font-bold">*Insert an email and password</label>
                    <button onClick={() => handleRegistration()} className="h-10 mx-auto px-6 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500">
                        Register
                    </button>
                </form>
            </div>
    );
}