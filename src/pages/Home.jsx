import '../App.css';
import { PageTop } from '../compenents/PageTop';
import { EventsList } from '../compenents/EventsLists';
import {useRecoilState, useRecoilValue } from 'recoil';
import { allTournaments, shouldFilterEvents, tournamentList } from '../atoms/tournamentAtom';
import { useEffect } from 'react';

export function Home({allEvents}) {
  const [Tournaments,setAlltournaments] = useRecoilState(allTournaments);
  const [changeEvents, setchangeEvents] = useRecoilState(shouldFilterEvents);
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
      <PageTop/>
      <EventsList allEvents={allEvents} shouldFilter={changeEvents}/>
  </div>
  );
}


