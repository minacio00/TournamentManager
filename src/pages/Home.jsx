import '../App.css';
import {Sidebar} from "../compenents/Sidebar"
import { PageTop } from '../compenents/PageTop';

export function Home() {
  return (
  <div className='grow'>
      <PageTop />
      <h1 className='text-white'>Eventos disponíveis ....</h1>
  </div>
  );
}


