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

function Column({ title, tickets, users }) {
  const columnIcons = {
    'To Do': <img src={TodoIcon} alt="To Do" className="column-icon" />,
    'In Progress': <img src={InProgressIcon} alt="In Progress" className="column-icon" />,
    'Done': <img src={DoneIcon} alt="Done" className="column-icon" />,
    'Backlog': <img src={BacklogIcon} alt="Backlog" className="column-icon" />,
    'Cancelled': <img src={CancelledIcon} alt="Cancelled" className="column-icon" />,
  };

  const columnIcon = columnIcons[title] || <span className="column-icon">[Icon]</span>;

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