import { FC } from 'react';
import Navbar from './components/Navbar';
import Tickets from './components/Tickets';
import NewTicket from './components/NewTicket';
import './App.css';

const App:FC<any> = () => {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Tickets />
        <NewTicket />
      </main>
    </div>
  );
}

export default App;
