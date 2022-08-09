import React from 'react'
import './BookingBtnBlock.css';

function BookingBtnBlock(props) {

    return (
        <button 
            className="booking-btn-block booking-block ripple-effect" 
            onClick={ () => props.submitBookingRequest() }>
            Reservar
        </button>
    );
}

export default BookingBtnBlock