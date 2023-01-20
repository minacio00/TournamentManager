import {HomeIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { allTournaments } from '../atoms/tournamentAtom';
export function Sidebar() {
    const Tournaments = useRecoilValue(allTournaments);
    return(
        <div className="text-gray-500 bg-slate-900
        flex-shrink-0 hidden top-2 flex-grow-1
        min-h-screen
        p-5 text-xs lg:text-sm
        sm:max-w-[12rem]
        sm:inline-flex
        lg:max-w[15rem] shadow-2xl border-gray-700
        scrollbar-hide pb-36">
            <div className="space-y-2 flex flex-col items-center">
                <Link className="hover:text-white " to={'/'}>
                    <HomeIcon className='h-8 w-8'/>
                </Link>
                {Tournaments.map((value, index) => {
                    return(
                        <button key={index} className='hover:text-white '>
                            <p>{value.Name}</p>
                        </button>
                    )
                })}
                <button className="space-x-2 hover:text-white">
                    <p>Upcoming event</p>
                </button>
                <button className="space-x-2 hover:text-white">
                    <p>Upcoming event</p>
                </button>
            </div>
        </div>
    );
}