import '../App.css';
import { PageTop } from '../compenents/PageTop';
import {useRecoilValue } from 'recoil';
import { allTournaments } from '../atoms/tournamentAtom';
import { CalendarIcon,UsersIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export function Home() {
  const Tournaments = useRecoilValue(allTournaments);
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
                className='flex flex-col px-4 m-1
                rounded-lg border-gray-200 border-2
                hover:border-indigo-300'>
                  <b className='py-1 self-center' >{value.Name}</b>
                  <div className='inline-flex self-center '>
                    <CalendarIcon className='w-4 h-4 self-center shrink-0'/>
                    <span className='' key={index + 'j'}>{value.date}</span>
                  </div>
                  <p className='inline-flex self-center space-x-1 py-1'>
                    <UsersIcon className='self-center w-4 h-4'/>
                    <span key={index+'i'}>{value.participants}</span>
                  </p>
                </Link>
              )
          })}
        </div>
      </main>
  </div>
  );
}


