import React from 'react';

const Button = ({ side, label, onMonthChange }) => {
    return (
        <div className={`buttons  ${side}`}>
            <button className={`${side}`} onClick={onMonthChange}>
                <strong>{label}</strong>
            </button>
        </div>
    );
};

export default Button;