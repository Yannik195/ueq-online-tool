import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Participants.css';


export default function Participants(props) {
  const { number, link_uuid } = props;

  return (
    <div className="participants">
      <div className="participants-left">
        <FontAwesomeIcon icon={faUsers} />
      </div>
      <div className="participants-right">
        <h2>{number} Teilnehmer</h2>
        <p>
          Teile den Survey-Link mit deinen Teilnehmern:
        </p>
        <p><a href={`${process.env.REACT_APP_FRONTEND_URL}/q/fill/${link_uuid}`}>{`${process.env.REACT_APP_FRONTEND_URL}/q/fill/${link_uuid}`}</a>
        </p>
      </div>
    </div>
  );
};