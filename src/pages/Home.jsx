import '../App.css';
import { PageTop } from '../compenents/PageTop';
import {useRecoilState, useRecoilValue } from 'recoil';
import { allTournaments, tournamentList } from '../atoms/tournamentAtom';
import { CalendarIcon,UsersIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import dateFortmat from "dateformat";

export function Home() {
  const [Tournaments,setAlltournaments] = useRecoilState(allTournaments);
  const matches = useRecoilValue(tournamentList);
  if (Tournaments.length == 0) {
    return(
      <div className='grow'>
        <PageTop />
        <main>
          <div className='flex py-12 px-2 justify-center'>
            <b>No events at the moment, maybe you should organize one yourself</b>
          </div>
        </main>
      </div>
    )
  }
  return (
  <div className='grow'>
      <PageTop />
      <main>
        <div className='flex py-12 mx-6 justify-self-center flex-wrap'>
          {Tournaments.map((value, index) => {
              return (
                <Link to={`/event/${value.Name}`}
                key={index}
                className='flex flex-col m-1
                rounded-lg border-gray-300 border
                hover:border-2
                hover:border-indigo-300'>
                  <img className='max-h-32 rounded-lg'  src='chesspic.jpg' />
                  <b className='text-lg self-center' >{value.Name}</b>
                  <p className='inline-flex text-md text-gray-600 self-center pb-1 space-x-1'>
                    <span key={index+'k'}>{value.sport}</span>
                  </p>
                  <div className='inline-flex self-center '>
                    <CalendarIcon className='w-4 h-4 self-center shrink-0'/>
                    <span className='' key={index + 'j'}>{dateFortmat(value.date,"dd-mm-yyyy")}</span>
                  </div>
                  <p className='inline-flex self-center space-x-1 py-1'>
                    <UsersIcon className='self-center w-4 h-4'/>
                    <span key={index+'i'}>{value.confirmed}/{value.participants}</span>
                  </p>
                </Link>
              )
          })}
        </div>
      </main>
  </div>
  );
}


