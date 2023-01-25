import './App.css';
import {Sidebar} from "./compenents/Sidebar"
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import {Home} from './pages/Home';
import { NewEvent } from './pages/NewEvent';
import { BracketView }from './pages/BracketView';
import { Register } from './pages/Register';

function App() {
  return (
    <div className='flex'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/event/:name' element={<Register />} />
          <Route path='/event/:name/bracket' element={<BracketView />} />
          <Route path='/newevent' element={<NewEvent />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
