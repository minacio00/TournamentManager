import {HomeIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { allTournaments } from '../atoms/tournamentAtom';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
export function Sidebar() {
    const Tournaments = useRecoilValue(allTournaments);
    return(
        <div className="text-gray-500 bg-slate-900
        flex-shrink-0 hidden top-2 flex-grow-1
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
                        <button key={index} className='hover:text-white break-all '>
                            <img className='rounded-sm h-10 w-10 my-1 hover:border-2 border-blue-500' src="chesspic.jpg" alt="" />
                            {/* <p>{value.Name}</p> */}
                        </button>
                    )
                })}
                <PlusCircleIcon className='h-8 w-8 space-y-2 text-white'/>
            </div>
        </div>
    );
}