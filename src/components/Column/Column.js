import React from 'react';
import Card from '../Card/Card';
import './Column.css';
import TodoIcon from '../../assets/To-do.svg';
import InProgressIcon from '../../assets/in-progress.svg';
import DoneIcon from '../../assets/Done.svg';
import BacklogIcon from '../../assets/Backlog.svg';
import CancelledIcon from '../../assets/Cancelled.svg';
import Add from '../../assets/add.svg';
import Options from '../../assets/3 dot menu.svg';
import High from '../../assets/high-priority.svg';
import Urgent from '../../assets/urgent-priority.svg';
import Low from '../../assets/low-priority.svg';
import NoPriority from '../../assets/No-priority.svg';
import Medium from '../../assets/medium-priority.svg';
import Anoop from '../../assets/Anoop.svg';
import Yogesh from '../../assets/yogesh.svg';
import Suresh from '../../assets/suresh.svg';
import Shankar from '../../assets/shankar.svg';
import Ramesh from '../../assets/ramesh.svg';

function Column({ title, tickets, users }) {
  console.log('Column:', title, tickets);
  const columnIcons = {
    'Todo': <img src={TodoIcon} alt="To Do" className="column-icon" />,
    'In progress': <img src={InProgressIcon} alt="In Progress" className="column-icon" />,
    'Done': <img src={DoneIcon} alt="Done" className="column-icon" />,
    'Backlog': <img src={BacklogIcon} alt="Backlog" className="column-icon" />,
    'Cancelled': <img src={CancelledIcon} alt="Cancelled" className="column-icon" />,
    'High': <img src={High} alt="High Priority" className="column-icon" />,
    'Urgent': <img src={Urgent} alt="Urgent Priority" className="column-icon" />,
    'Low': <img src={Low} alt="Low Priority" className="column-icon" />,
    'No priority': <img src={NoPriority} alt="No Priority" className="column-icon" />,
    'Medium': <img src={Medium} alt="Medium Priority" className="column-icon" />,
    'Anoop sharma': <img src={Anoop} alt="Anoop" className="column-icon" />,
    'Yogesh': <img src={Yogesh} alt="Yogesh" className="column-icon" />,
    'Suresh': <img src={Suresh} alt="Suresh" className="column-icon" />,
    'Shankar Kumar': <img src={Shankar} alt="Shankar" className="column-icon" />,
    'Ramesh': <img src={Ramesh} alt="Ramesh" className="column-icon" />
  };

  const columnIcon = columnIcons[title] || <span className="column-icon">[{title}]</span>;

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left">
          {columnIcon}
          <span>{title}</span>
        </div>
        <div className="column-header-right">
          <span className="ticket-count">{tickets.length}</span>
          <div className="flex-center">
            <img src={Add} alt="Add" className="column-header-icon" />
            <img src={Options} alt="Options" className="column-header-icon" />
          </div>
        </div>
      </div>
      <div className="column-content">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find((u) => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;