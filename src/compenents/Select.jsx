import {useState} from 'react'
import { useSetRecoilState } from 'recoil';
import {Participants} from '../atoms/tournamentAtom';
function powersOfTwo(maxTeams) {
    const maxExponent = Math.log2(maxTeams); // ??????????????
    const arr = [];
    for (let i = 2; i <= maxExponent; i++) {
        arr.push(2 ** i);
    }
    return arr;
}
export const Select = () => {
    const setParticipants = useSetRecoilState(Participants);
    const options = powersOfTwo(128);
    return (
        <select className='bg-white min-w-full rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 focus:z-10 sm:text-sm' name="Number of participants" id="attendants"
            onChange={(e) => setParticipants(e.target.value)}>
            {options.map((value, index) => {
                return (
                    <option value={value} key={index}>{value}</option>
                )
            })}
        </select>
    )
}