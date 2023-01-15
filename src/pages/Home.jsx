import '../App.css';
import {Sidebar} from "../compenents/Sidebar"
import { PageTop } from '../compenents/PageTop';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allTournaments } from '../atoms/tournamentAtom';
import { useEffect } from 'react';
import { CalendarIcon,UsersIcon } from '@heroicons/react/24/solid';

export function Home() {
  const Tournaments = useRecoilValue(allTournaments);
  return (
  <div className='grow'>
      <PageTop />
      <main>
        <div className='flex py-12 px-2 justify-center'>
          {Tournaments.map((value, index) => {
              return (
                <div className='flex flex-col px-4 m-1 rounded-lg border-gray-200 border-2'>
                  <span className='py-1' key={index}>{value.Name}</span>
                  <span className='py-1' key={index + 'j'}>{value.date}</span>
                  <p className='inline-flex space-x-1 py-1'>
                    <UsersIcon className=' w-4 h-4'/>
                    <span key={index+'i'}>{value.participants}</span>
                  </p>
                </div>
              )
          })}
        </div>
      </main>
  </div>
  );
}


