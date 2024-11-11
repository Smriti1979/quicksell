import React from 'react';
import UrgentIcon from '../../assets/urgent-priority.svg';
import HighIcon from '../../assets/high-priority.svg';
import MediumIcon from '../../assets/medium-priority.svg';
import LowIcon from '../../assets/low-priority.svg';
import NoPriorityIcon from '../../assets/No-priority.svg';
import Profile from '../../assets/profile-icon.svg';

// import FeatureIcon from '../assets/feature.svg';
import './Card.css';

function Card({ ticket, user }) {
  const priorityIcons = {
    4: <img src={UrgentIcon} alt="Urgent" className="priority-icon" />,
    3: <img src={HighIcon} alt="High" className="priority-icon" />,
    2: <img src={MediumIcon} alt="Medium" className="priority-icon" />,
    1: <img src={LowIcon} alt="Low" className="priority-icon" />,
    0: <img src={NoPriorityIcon} alt="No Priority" className="priority-icon" />
  };

  return (
    <div className="card">
      <div className="card-header">
       
        <span className="ticket-id">{ticket.id}</span>
        <span className="user-avatar"><img src={Profile}></img></span>
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-footer">
        <span className="priority-tag">
          {priorityIcons[ticket.priority]}
          {' '}
          {['Urgent', 'High', 'Medium', 'Low', 'No priority'][ticket.priority]}
        </span>
        <span className="feature-tag">
          {/* <img src={FeatureIcon} alt="Feature" className="feature-icon" /> */}
          {ticket.tag}
        </span>
      </div>
    </div>
  );
}

export default Card;