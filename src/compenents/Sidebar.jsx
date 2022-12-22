export function Sidebar() {
    return(
        <div className="text-gray-500
        hidden md:inline-flex
        p-5 text-xs
        lg:text-sm
        sm:max-w-[12rem]
        lg:max-w[15rem] border-r border-gray-900
        overflow-y-scroll h-screen scrollbar-hide pb-36">
            <div className="space-y-2">
                <button className="flex items-center space-x-2 hover:text-white ">
                    <p>Upcoming event</p>
                </button>
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