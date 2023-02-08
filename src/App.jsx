import './App.css';
import { useEffect } from 'react';
import {Sidebar} from "./compenents/Sidebar"
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import { islogged, User } from "./atoms/userAtom";
import { Home } from './pages/Home';
import { NewEvent } from './pages/NewEvent';
import { BracketView }from './pages/BracketView';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { getAuth } from 'firebase/auth';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { allTournaments } from './atoms/tournamentAtom';

function App() {
  // const auth = getAuth();
  // const setUser = useSetRecoilState(User);
  const [Tournaments, setAlltournaments] = useRecoilState(allTournaments);
  const IsLogged = useRecoilValue(islogged);
  // fazer com que app busque o estado de autenticação num useeffect e setar sempre que islogged for diferente do auth.currentUser

  return (
    <div className='flex'>
      <BrowserRouter>
        <Sidebar logged={IsLogged} allEvents={Tournaments} />
        <Routes>
          <Route path='/' index element={<Home allEvents={Tournaments} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/event/:name' element={<Register />} />
          <Route path='/event/:name/bracket' element={<BracketView />} />
          <Route path='/newevent' element={<NewEvent />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
