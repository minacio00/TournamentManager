import {HomeIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allTournaments } from '../atoms/tournamentAtom';
import { islogged } from '../atoms/userAtom';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { UserMinusIcon } from '@heroicons/react/24/solid';
import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebaseConfig';
import { useEffect, useState } from 'react';

export function Sidebar() {
    const Tournaments = useRecoilValue(allTournaments);
    const [Islogged, setIslogged] = useRecoilState(islogged);
    // const unsubscribe = getAuth().onAuthStateChanged((user) => {
    //     if (getAuth().currentUser !== null) {
    //         setIslogged(!Islogged);
           
    //     }
    // });
    // // unsubscribe();
    // useEffect(() => {
    //     setIslogged(getAuth().currentUser !== null);    
    // });
    console.log(Islogged)
    return(
        <div className="text-gray-500 bg-slate-900
        flex-shrink-0 w-12 top-2 flex-grow-1
        min-h-screen
        p-5 text-xs lg:text-sm
        sm:w-20
        sm:flex
        lg:max-w[15rem] shadow-2xl border-gray-700
        scrollbar-hide pb-36 overflow-y-auto">
            <div className="space-y-2 flex flex-col items-center mx-auto">
                <Link className="hover:text-white " to={'/'}>
                    <HomeIcon className='h-8 w-8 mb-4 text-white'/>
                </Link>

                {Tournaments.map((value, index) => {
                    
                    return(
                        <Link key={index} to={`event/${value.eventName}`} className='hover:text-white break-all '>
                            <img className='rounded-sm h-10 w-10 my-1 hover:border-2 border-blue-500' src="/chesspic.jpg" alt={value.Name} />
                            {/* <p>{value.Name}</p> */}
                        </Link>
                    )
                })}
                <Link to={'newevent'}>
                    <PlusCircleIcon className='h-8 w-8 space-y-2 text-white' />
                </Link>
                
                 <Link hidden={Islogged} className='fixed bottom-8' to={'login'}>
                    <UserCircleIcon className='h-8 w-8 space-y-2 text-white' />
                </Link>

                <div hidden={!Islogged} onClick={() => {
                    signOut(getAuth(firebaseApp));
                    setIslogged(() => !Islogged);
                    }
                 }
                 className="hover:text-white h-8 w-8 space-y-2 fixed bottom-8 " to={'/'}>
                    <UserMinusIcon className='text-red-500 hover:cursor-pointer'/>
                </div>
                {/* <div onClick={() =>{ signOut(getAuth(firebaseApp)); console.log("amado")}} className="hover:text-white " to={'/'}>
                    <UserMinusIcon className='h-8 w-8 mb-4 text-red-500 hover:cursor-pointer'/>
                </div> */}
            </div>
        </div>
    );
}