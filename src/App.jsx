import './App.css';
import {Sidebar} from "./compenents/Sidebar"
import { PageTop } from './compenents/PageTop';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import {Home} from './pages/Home';
import { NewEvent } from './pages/NewEvent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/newevent' element={<NewEvent />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
