import React, { Component } from 'react'
import './BookingBar.css';

// External Packages
import moment from 'moment'

// Others Components
import BrandBlock from './brand-block/BrandBlock'
import DatePickerBlock from './date-picker-block/DatePickerBlock'
import CalendarPanel from './calendar-panel/CalendarPanel'
import BookingBtnBlock from './booking-btn-block/BookingBtnBlock'
import CustomerCountBlock from './customer-count-block/CustomerCountBlock'



class BookingBar extends Component {

    constructor(props) {

        super(props);

        this.state = {

            arrivalDate   : moment().startOf('day'),
            departureDate : moment().startOf('day').add(1, 'days'),
            customerCount : 1,
            isArrivalDateCalendarPanelVisible   : false,
            isDepartureDateCalendarPanelVisible : false,
            arrivalDateCalendarPanelMatrix      : this.generateMonthDaysMatrix(true, moment().startOf('day').format('YYYY'), moment().startOf('day').format('D')),
            departureDateCalendarPanelMatrix    : this.generateMonthDaysMatrix(false, moment().startOf('day').format('YYYY'), moment().startOf('day').format('D')),
        };
    };

    generateMonthDaysMatrix = (isForArrivalDate, year, month) => {

        let matrix = [];
        let daysCount = (new Date(year, month, 0)).getDate();

        let i = 1;
        while(i <= daysCount) {

            let rowIndex = Math.ceil(i/7) - 1;
            if (matrix.length-1 < rowIndex) matrix.push([]);

            const dayNumber = i;

            matrix[rowIndex].push({ value: i, onSelect: () => { 

                if (isForArrivalDate) {

                    let selectedDate = this.state.arrivalDate.clone().set('date', dayNumber);
                    if (!this.canChangeArrivalDate(selectedDate)) return;
                    this.setState({ arrivalDate: selectedDate, isArrivalDateCalendarPanelVisible: false });  
                }
                else {

                    let selectedDate = this.state.departureDate.clone().set('date', dayNumber);
                    if (!this.canChangeDepartureDate(selectedDate)) return;
                    this.setState({ departureDate: selectedDate, isDepartureDateCalendarPanelVisible: false });  
                }    
            }});

            i++;
        }

        return matrix;
    }

    canChangeArrivalDate = (nextDate) => {

        return (
            (nextDate < this.state.departureDate) && 
            (nextDate >= moment().startOf('day'))
        );
    }

    canChangeDepartureDate = (nextDate) => {

        return (
            (nextDate > this.state.arrivalDate)
        );
    }

    incrementArrivalDateMonth = () => {

        let currentDay = this.state.arrivalDate.date();
        let nextDate = this.state.arrivalDate.clone().add(1, 'months').set('date', currentDay);

        if (!this.canChangeArrivalDate(nextDate)) return;

        this.setState({ 
            arrivalDate: nextDate,
            arrivalDateCalendarPanelMatrix: this.generateMonthDaysMatrix(true, nextDate.format('YYYY'), nextDate.format('M')),
        });
    }

    decrementArrivalDateMonth = () => {

        let currentDay = this.state.arrivalDate.date();
        let nextDate = this.state.arrivalDate.clone().subtract(1, 'months').set('date', currentDay);

        if (!this.canChangeArrivalDate(nextDate)) return;

        this.setState({ 
            arrivalDate: nextDate,
            arrivalDateCalendarPanelMatrix: this.generateMonthDaysMatrix(true, nextDate.format('YYYY'), nextDate.format('M')),
        });
    }

    incrementDepartureDateMonth = () => {

        let currentDay = this.state.departureDate.date();
        let nextDate = this.state.departureDate.clone().add(1, 'months').set('date', currentDay);

        if (!this.canChangeDepartureDate(nextDate)) return;

        this.setState({ 
            departureDate: nextDate,
            departureDateCalendarPanelMatrix: this.generateMonthDaysMatrix(false, nextDate.format('YYYY'), nextDate.format('M')), 
        });
    }
    
    decrementDepartureDateMonth = () => {

        let currentDay = this.state.departureDate.date();
        let nextDate = this.state.departureDate.clone().subtract(1, 'months').set('date', currentDay);

        if (!this.canChangeDepartureDate(nextDate)) return;

        this.setState({ 
            departureDate: nextDate,
            departureDateCalendarPanelMatrix: this.generateMonthDaysMatrix(false, nextDate.format('YYYY'), nextDate.format('M')),
        });
    }

    toggleArrivalDateCalendarPanel = () => {

        if (this.state.isDepartureDateCalendarPanelVisible) { this.setState({ isDepartureDateCalendarPanelVisible: false }) }
        this.setState({ isArrivalDateCalendarPanelVisible: !this.state.isArrivalDateCalendarPanelVisible });
    };

    toggleDepartureDateCalendarPanel = () => {

        if (this.state.isArrivalDateCalendarPanelVisible) { this.setState({ isArrivalDateCalendarPanelVisible: false }) }
        this.setState({ isDepartureDateCalendarPanelVisible: !this.state.isDepartureDateCalendarPanelVisible });
    };

    hideCalendarPanels = () => {

        this.setState({ isArrivalDateCalendarPanelVisible: false });
        this.setState({ isDepartureDateCalendarPanelVisible: false });
    }

    increaseCustomerCount = () => {

        if (this.state.customerCount >= this.props.maxCustomerPerReservation) return;
        this.setState((state) => ({ customerCount: state.customerCount + 1 }));
    };

    decreaseCustomerCount = () => {

        if (this.state.customerCount <= 1) return;
        this.setState((state) => ({ customerCount: state.customerCount - 1 }));
    };

    submitBookingRequest = () => {

        const bookingResult = { 

            arrivalDate   : this.state.arrivalDate.format('MMMM Do YYYY'),
            departureDate : this.state.departureDate.format('MMMM Do YYYY'),
            customerCount : this.state.customerCount,
        }

        console.log(bookingResult);
    };

    render() {

        return (

            <div className="booking-bar-container noselect">
                <div className="container booking-bar d-flex">
                    <div className="row">
                        <div className="col" onClick={ () => this.hideCalendarPanels() }>
                            <BrandBlock 
                                companyType={ this.props.companyType } 
                                companyName={ this.props.companyName } 
                                starsCount ={ this.props.starsCount  } 
                            />
                        </div>
                        <div className="col">
                            <DatePickerBlock 
                                title="Arrival"
                                selectedDate={ this.state.arrivalDate }
                                onClick={ () => this.toggleArrivalDateCalendarPanel() }
                            />
                        </div>
                        <div className="col">
                            <DatePickerBlock 
                                title="Departure"
                                selectedDate={ this.state.departureDate }
                                onClick={ () => this.toggleDepartureDateCalendarPanel() }
                            />
                        </div>
                        <div className="col" onClick={ () => this.hideCalendarPanels() }>
                            <CustomerCountBlock 
                                className="col" 
                                customerCount={ this.state.customerCount }
                                increaseCustomerCount={ this.increaseCustomerCount } 
                                decreaseCustomerCount={ this.decreaseCustomerCount } 
                            />
                        </div>
                        <div className="col" onClick={ () => this.hideCalendarPanels() }>
                            <BookingBtnBlock 
                                className="col" 
                                submitBookingRequest={ this.submitBookingRequest }
                            />
                        </div>
                    </div>
                </div>

                { 
                    this.state.isArrivalDateCalendarPanelVisible 
                    && 
                    <CalendarPanel 
                        isForDeparture={ false } 
                        selectedDate={ this.state.arrivalDate } 
                        monthDaysArray={ this.state.arrivalDateCalendarPanelMatrix  }
                        incrementDateMonth={ () => this.incrementArrivalDateMonth() }
                        decrementDateMonth={ () => this.decrementArrivalDateMonth() }
                    /> 
                }

                { 
                    this.state.isDepartureDateCalendarPanelVisible 
                    && 
                    <CalendarPanel 
                        isForDeparture={ true } 
                        selectedDate={ this.state.departureDate } 
                        monthDaysArray={ this.state.departureDateCalendarPanelMatrix  }
                        incrementDateMonth={ () => this.incrementDepartureDateMonth() }
                        decrementDateMonth={ () => this.decrementDepartureDateMonth() }
                    /> 
                }

            </div>
        );
    }
}

export default BookingBar