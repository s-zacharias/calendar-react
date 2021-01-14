import React from 'react';
import Button from './Button';

const Header = ({ today, day, month, year, setDate }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const onPreviousMonth = () => {
    setDate(new Date(year, month - 1, day));
  };

  const onNextMonth = () => {
    setDate(new Date(year, month + 1, day));
  };

  const onToday = () => {
    setDate(today);
  };

  return (
    <div className="header">
      <Button side={'left'} label={'Previous'} onClick={onPreviousMonth} />
      <Button side={'left'} label={'Today'} onClick={onToday} />
      <div className="month-label">
        <h1>
          {months[month]} {year}
        </h1>
      </div>
      <Button
        side={'right'}
        label={'Add Event'}
        onClick={() => console.log('Add')}
      />
      <Button side={'right'} label={'Next'} onClick={onNextMonth} />
    </div>
  );
};

export default Header;
