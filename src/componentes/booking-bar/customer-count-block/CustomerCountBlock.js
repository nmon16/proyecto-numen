import React from 'react'
import './CustomerCountBlock.css';

function CustomerCountBlock(props) {

    return (
        <div className="container customer-count-block booking-block">
            <div className="row">
                <div className="col">Number</div>
            </div>
            <div className="row">
                <button className="col block-counter-btn" onClick={ () => { props.decreaseCustomerCount() } }>-</button>
                <div className="col value-text">{ props.customerCount }</div>
                <button className="col block-counter-btn" onClick={ () => { props.increaseCustomerCount() } }>+</button>
            </div>
            <div className="row lowercase-text discrete-text">
                <div className="col lowercase-text discrete-text">persons</div>
            </div>
        </div>
    );
}

export default CustomerCountBlock