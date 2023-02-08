import '../App.css';
import { PageTop } from '../compenents/PageTop';
import {useRecoilState, useRecoilValue } from 'recoil';
import { allTournaments, tournamentList } from '../atoms/tournamentAtom';
import { CalendarIcon,UsersIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import dateFortmat from "dateformat";
import { useEffect } from 'react';

export function Home({allEvents}) {
  const [Tournaments,setAlltournaments] = useRecoilState(allTournaments);
  const matches = useRecoilValue(tournamentList);

  const getAllEvents = async () => {
    await fetch('https://tournament-manager-api.onrender.com' + '/tournaments/view', {
      method: "GET", mode: "cors", headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      res.json().then((data) => {
        setAlltournaments(data);
        console.log("reading db")
        localStorage.setItem('allEvents',JSON.stringify(data));
      });
      // setAlltournaments(res.json());
    })
    .catch((e) => console.log(e));
  }

  useEffect(() => {
    // if (Tournaments.length === 0) {
    if (allEvents.length === 0) {
      getAllEvents();
    }
    else{
      // setAlltournaments(JSON.parse(localStorage.getItem('allEvents')) );
    }
    
  },[]);

  if (allEvents.length == 0) {
    return(
      <div className='grow'>
        <PageTop />
        <main>
          <div className='text-xs sm:text-sm text-center sm:flex py-12 px-2 justify-center'>
            <b>No events at the moment, maybe you should organize one yourself</b>
          </div>
        </main>
      </div>
    )
  }
  return (
  <div className='grow ml-[80px]'>
      <PageTop />
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
                  <img className='max-h-32 rounded-lg'  src='chesspic.jpg' />
                  <b className='text-lg self-center' >{value?.eventName}</b>
                  <p className='inline-flex text-md text-gray-600 self-center pb-1 space-x-1'>
                    <span key={index+'k'}>{value?.Sport}</span>
                  </p>
                  <div className='inline-flex self-center '>
                    <CalendarIcon className='w-4 h-4 self-center shrink-0'/>
                    <span className='' key={index + 'j'}>{dateFortmat(value?.date,"dd-mm-yyyy")}</span>
                  </div>
                  <p className='inline-flex self-center space-x-1 py-1'>
                    <UsersIcon className='self-center w-4 h-4'/>
                    <span key={index+'i'}>{value?.confirmed}/{value?.NumberOfParticipants}</span>
                  </p>
                </Link>
              )
          })}
        </div>
      </main>
  </div>
  );
}


