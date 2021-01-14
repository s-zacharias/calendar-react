import React from 'react';
import { Router, Route } from 'react-router-dom';
import Calendar from './calendar';
import history from '../history';
import './styles.css';
import NewEvent from './events/NewEvent';
import DayEventDisplay from './events/DayEventDisplay';
import EditEvent from './events/EditEvent';
import DeleteEvent from './events/DeleteEvent';
import Header from './Header';

const App = ({ events }) => {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Calendar} />
          <Route path="/events/new" exact component={NewEvent} />
          <Route path="/events/show" exact component={DayEventDisplay} />
          <Route path="/events/edit/:id" exact component={EditEvent} />
          <Route path="/events/delete/:id" exact component={DeleteEvent} />
        </div>
      </Router>
    </div>
  );
};

export default App;
