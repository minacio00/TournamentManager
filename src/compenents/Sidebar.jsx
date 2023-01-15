import {HomeIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
export function Sidebar() {
    return(
        <div className="text-gray-500 bg-slate-900
        flex-shrink-0 hidden top-2 flex-grow-1
        min-h-screen
        p-5 text-xs lg:text-sm
        sm:max-w-[12rem]
        sm:inline-flex
        lg:max-w[15rem] border-r border-gray-700
        scrollbar-hide pb-36">
            <div className="space-y-2">
                <Link className="flex items-center space-x-2 hover:text-white " to={'/'}>
                    <HomeIcon className='h-8 w-8'/>
                </Link>
                <button className="flex items-center space-x-2 hover:text-white">
                    <p>Upcoming event</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <p>Upcoming event</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
                <button className="flex items-center space-x-2 hover:text-white">
                    <p>Upcoming event</p>
                </button>
            </div>
        </div>
    );
}