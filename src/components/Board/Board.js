import React from 'react';
import Column from '../Column/Column';
import './Board.css';

function Board({ tickets, users, grouping, sorting }) {
  const groupTickets = () => {
    let grouped = {};
    
    if (!tickets || !Array.isArray(tickets)) return {};
    
    switch(grouping) {
      case 'status':
        tickets.forEach(ticket => {
          const status = ticket.status || 'No Status';
          if (!grouped[status]) grouped[status] = [];
          grouped[status].push(ticket);
        });
        break;
      
      case 'user':
        tickets.forEach(ticket => {
          const user = users.find(u => u.id === ticket.userId);
          const userName = user ? user.name : 'Unassigned';
          if (!grouped[userName]) grouped[userName] = [];
          grouped[userName].push(ticket);
        });
        break;
      
      case 'priority':
        const priorities = {
          4: 'Urgent',
          3: 'High',
          2: 'Medium',
          1: 'Low',
          0: 'No priority'
        };
        
        tickets.forEach(ticket => {
          const priorityName = priorities[ticket.priority] || 'No priority';
          if (!grouped[priorityName]) grouped[priorityName] = [];
          grouped[priorityName].push(ticket);
        });
        break;
      
      default:
        break;
    }
    
    // Sort tickets within each group
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          // Ensure title exists and is a string before comparing
          const titleA = (a.title || '').toString();
          const titleB = (b.title || '').toString();
          return titleA.localeCompare(titleB);
        }
      });
    });
    
    return grouped;
  };

  const grouped = groupTickets();

  return (
    <div className="board">
      {Object.entries(grouped).map(([title, tickets]) => (
        <Column 
          key={title} 
          title={title} 
          tickets={tickets}
          users={users}
        />
      ))}
    </div>
  );
}

export default Board;