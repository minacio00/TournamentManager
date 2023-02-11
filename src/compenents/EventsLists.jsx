import { CalendarIcon, UsersIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import dateFortmat from "dateformat";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../firebaseConfig";


export const EventsList = ({allEvents, shouldFilter}) => {
    const userUid = getAuth(firebaseApp).currentUser.uid || false;
    if (shouldFilter) {
        return (
            <main>
                <div className='flex py-12 mx-6 justify-self-center flex-wrap'>
                    {allEvents?.map((value, index) => {
                        if (value.createdBy === userUid) {
                            return (
                                <Link to={`/event/${value?.eventName}`}
                                    key={index}
                                    className='flex flex-col m-1
                    rounded-lg border-gray-300 border
                    hover:border-2
                    hover:border-indigo-300'>
                                    <img className='h-32 w-32 self-center rounded-md' src={`${value?.imageUrl}`} />
                                    <b className='text-lg px-1 self-center' >{value?.eventName}</b>
                                    <p className='inline-flex text-md text-gray-600 self-center pb-1 space-x-1'>
                                        <span key={index + 'k'}>{value?.Sport}</span>
                                    </p>
                                    <div className='inline-flex self-center '>
                                        <CalendarIcon className='w-4 h-4 self-center shrink-0' />
                                        <span className='' key={index + 'j'}>{dateFortmat(value?.date, "dd-mm-yyyy")}</span>
                                    </div>
                                    <p className='inline-flex self-center space-x-1 py-1'>
                                        <UsersIcon className='self-center w-4 h-4' />
                                        <span key={index + 'i'}>{value?.confirmed}/{value?.NumberOfParticipants}</span>
                                    </p>
                                </Link>
                            )
                        }
                    })}
                </div>
            </main>
        )
    }

    return(
        <main>
            <div className='flex py-12 mx-6 justify-self-center flex-wrap'>
                {allEvents?.map((value, index) => {
                    return (
                        <Link to={`/event/${value?.eventName}`}
                            key={index}
                            className='flex flex-col m-1
                rounded-lg border-gray-300 border
                hover:border-2
                hover:border-indigo-300'>
                            <img className='h-32 w-32 self-center rounded-md' src={`${value?.imageUrl}`} />
                            <b className='text-lg px-1 self-center' >{value?.eventName}</b>
                            <p className='inline-flex text-md text-gray-600 self-center pb-1 space-x-1'>
                                <span key={index + 'k'}>{value?.Sport}</span>
                            </p>
                            <div className='inline-flex self-center '>
                                <CalendarIcon className='w-4 h-4 self-center shrink-0' />
                                <span className='' key={index + 'j'}>{dateFortmat(value?.date, "dd-mm-yyyy")}</span>
                            </div>
                            <p className='inline-flex self-center space-x-1 py-1'>
                                <UsersIcon className='self-center w-4 h-4' />
                                <span key={index + 'i'}>{value?.confirmed}/{value?.NumberOfParticipants}</span>
                            </p>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}