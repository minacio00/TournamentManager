
// todo: form para criação de um novo evento (num de competidores, nome do evento....)
export const NewEvent = () => {
    return (
        <div className=" bg-slate-800 min-h-screen min-w-screen text-white
        flex flex-col items-center w-full justify-center" >
            <form className="mt-8 space-y-6" method="post">
                <div className="space-y-4">
                    <div>
                        <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Event name" name="Event" id="event"
                            onChange={(e) => setLoginUser(e.target.value)} required />
                    </div>
                    <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Max n° of participants" name="num" id="num" type="number" min="0" required
                            onChange={(e) => setLoginUser(e.target.value)} />
                    <input className=
                        "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Event date" name="date" id="eventDate" type="date" required
                        onChange={(e) => setLoginUser(e.target.value)} />
                </div>
                <button type="submit">Save</button>
            </form>
           
        </div>
    )
}