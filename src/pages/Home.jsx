import '../App.css';
import {Sidebar} from "../compenents/Sidebar"
import { PageTop } from '../compenents/PageTop';

export function Home() {
  return (
  <div className='bg-slate-900 flex'>
    <main>
      <Sidebar/>
    </main>
      <PageTop />
  </div>
  );
}


