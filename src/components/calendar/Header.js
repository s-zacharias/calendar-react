import React from 'react';
import Button from './Button';

const Header = ({ day, month, year, setDate}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const onPreviousMonth = () => {
        setDate(new Date(year, month - 1, day));
    };

    const onNextMonth = () => {
        setDate(new Date(year, month + 1, day));
    };

    return (
        <div className="header">
            <Button side={"left"} label={"Previous"} onMonthChange={onPreviousMonth} />
            <div className="month-label">
                <h1>{months[month]} {year}</h1>
            </div>
            <Button side={"right"} label={"Next"} onMonthChange={onNextMonth} />
        </div>
    );
};

export default Header;