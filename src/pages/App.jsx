import '../App.css';
import {Sidebar} from "../compenents/Sidebar"
import { PageTop } from '../compenents/PageTop';

function App() {
  return (
  <div className='bg-slate-900 flex'>
    <main>
      <Sidebar/>
    </main>
      <PageTop />
  </div>
  );
}

export default App;
