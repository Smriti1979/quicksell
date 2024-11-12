import React , {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () =>{
    try {
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    const data = await response.json();
    setTickets(data.tickets);
    setUsers(data.users);
  } catch(error){
    console.error('Error fetching data:', error);
  }
}


useEffect(() => {
  localStorage.setItem('grouping', grouping);
  localStorage.setItem('sorting', sorting);
}, [grouping, sorting]);

return (
  <div className="app">
    <Header 
      grouping={grouping}
      sorting={sorting}
      setGrouping={setGrouping}
      setSorting={setSorting}
    />
    <Board 
      tickets={tickets}
      users={users}
      grouping={grouping}
      sorting={sorting}
    />
  </div>
);
};


export default App;
