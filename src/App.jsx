import './App.css';
import {Sidebar} from "./compenents/Sidebar"
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import {Home} from './pages/Home';
import { NewEvent } from './pages/NewEvent';
import { BracketView }from './pages/BracketView';

function App() {
  return (
    <div className='flex'>
        <Sidebar />
      <BrowserRouter>
        <Routes>
        <Route path='/bracket' element={<BracketView />} />
          <Route path='/newevent' element={<NewEvent />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
