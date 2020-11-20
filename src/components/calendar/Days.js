import React from 'react';

const Days = ({ today, date, month, year, firstDay }) => {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapDaysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const isLeapYear = (year) => {
        if (year % 400 || (year % 4 && year % 100 !== 0)) {
            return true;
        }  
    };

    const numberOfDays = isLeapYear(date.getFullYear()) ? leapDaysInMonths : daysInMonths;

    const getDaysOfMonth = Array(numberOfDays[month] + (firstDay))
        .fill(null)
        .map((el, index) => {
            const d = index - (firstDay - 1);
            let type = '';
            if ((d === today.getDate() && month === today.getMonth()) && (year === today.getFullYear())) {
               type = 'day-current';
            }
            return (
                <div key={index} className="day">
                    <div className={`day-number ${type}`}>
                        {d > 0 ? d : ''}
                    </div>
                </div>
            );
        });

    return (
        <div className="month">
            {getDaysOfMonth}
        </div>
    );
};

export default Days;