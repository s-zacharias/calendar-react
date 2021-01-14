import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../redux/actions';
import NewEvent from './NewEvent';
import './events.css';
import DayEventDisplay from './DayEventDisplay';

const EventsManager = ({ createEvent, events }) => {
  return (
    <div className="events-manager">
      <DayEventDisplay />
      <NewEvent
        onFormSubmit={(e) => {
          console.log(e);
          //createEvent(e);
        }}
      />
    </div>
  );
};

export default EventsManager;
