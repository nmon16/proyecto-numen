import React from 'react'
import './DatePickerBlock.css';

function DatePickerBlock (props) {

    return (
        <>
            <div className="date-picker-block booking-block" onClick={ () => props.onClick() }>
                <div className="row">
                    <div className="col">{ props.title }</div>
                </div>
                <div className="row">
                    <div className="col value-text">{ props.selectedDate.date() }</div>
                </div>
                <div className="row lowercase-text discrete-text">
                    <div className="col align-top">{ props.selectedDate.format('MMMM') }, { props.selectedDate.year() }</div>
                </div>
            </div>
        </>
    );
}

export default DatePickerBlock