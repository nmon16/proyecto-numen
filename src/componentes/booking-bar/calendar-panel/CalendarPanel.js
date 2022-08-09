import React from 'react'
import './CalendarPanel.css';

import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

function CalendarPanel (props) {

    return (
        
        <div className={`calendar-panel ' + ${ (props.isForDeparture) ? 'departure-calendar-panel' : 'arrival-calendar-panel' }`  }>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn-calendar-panel-month" onClick={ (event) => { event.stopPropagation(); props.decrementDateMonth(); } }>
                        <FontAwesomeIcon className="icon-stars" icon={ faChevronCircleLeft } />
                    </button>
                </div>
                <div className="col month-text">
                    { `${ props.selectedDate.format('MMMM') }, ${ props.selectedDate.format('YYYY') }` }
                </div>
                <div className="col">
                    <button type="button" className="btn-calendar-panel-month" onClick={ (event) => { event.stopPropagation(); props.incrementDateMonth() } }> 
                        <FontAwesomeIcon className="icon-stars" icon={ faChevronCircleRight } />
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-sm borderless table-calendar-panel">
                        <thead>
                            <tr>
                                <th scope="col">{ moment(`${ props.selectedDate.format('YYYY') }/${ props.selectedDate.format('M') }/${ props.monthDaysArray[0][0].value }`, 'YYYY/M/DD').startOf('day').format('dd') }</th>
                                <th scope="col">{ moment(`${ props.selectedDate.format('YYYY') }/${ props.selectedDate.format('M') }/${ props.monthDaysArray[0][1].value }`, 'YYYY/M/DD').startOf('day').format('dd') }</th>
                                <th scope="col">{ moment(`${ props.selectedDate.format('YYYY') }/${ props.selectedDate.format('M') }/${ props.monthDaysArray[0][2].value }`, 'YYYY/M/DD').startOf('day').format('dd') }</th>
                                <th scope="col">{ moment(`${ props.selectedDate.format('YYYY') }/${ props.selectedDate.format('M') }/${ props.monthDaysArray[0][3].value }`, 'YYYY/M/DD').startOf('day').format('dd') }</th>
                                <th scope="col">{ moment(`${ props.selectedDate.format('YYYY') }/${ props.selectedDate.format('M') }/${ props.monthDaysArray[0][4].value }`, 'YYYY/M/DD').startOf('day').format('dd') }</th>
                                <th scope="col">{ moment(`${ props.selectedDate.format('YYYY') }/${ props.selectedDate.format('M') }/${ props.monthDaysArray[0][5].value }`, 'YYYY/M/DD').startOf('day').format('dd') }</th>
                                <th scope="col">{ moment(`${ props.selectedDate.format('YYYY') }/${ props.selectedDate.format('M') }/${ props.monthDaysArray[0][6].value }`, 'YYYY/M/DD').startOf('day').format('dd') }</th>
                            </tr>
                        </thead>
                        <tbody>
                        { 
                            props.monthDaysArray.map((weekArray) => ( 

                                <tr key={ props.monthDaysArray.indexOf(weekArray) }>
                                { 
                                    props.monthDaysArray[props.monthDaysArray.indexOf(weekArray)].map((weekDay) => (
                                        
                                        <td key={ `${props.monthDaysArray.indexOf(weekArray)}-${weekDay.value}` } className={ `btn-calendar-day ${ (weekDay.value === props.selectedDate.date()) ? 'selected-day' : '' }` } onClick={ (event) => { event.stopPropagation(); weekDay.onSelect(); } } >{ weekDay.value }</td>
                                    ))
                                }
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CalendarPanel