import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const DeleteEvent = () => {
  const onDismiss = () => history.push('/events/show');
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button" onClick={onDismiss}>
        Cancel
      </button>
    </>
  );
  return (
    <div>
      <Modal
        title="Delete Event"
        content="Do you want to delete this event?"
        actions={actions}
        onDismiss={onDismiss}
      />
    </div>
  );
};

export default DeleteEvent;
