//Dependencies
import React, { useState } from 'react';
//Data
import { filtersData } from '../assets/data/data.js';
import BookingForm from './BookingForm.js';



const Booking = () => {
    
    const [filterList, setFilterList] = useState(filtersData);
    const handleGlobalFilters = (filterId, filterValue) => {

        let newFilterList = filterList.map(filter => {
            return filterId === filter.id ?
                {
                    id: filter.id,
                    value: filterValue
                }
                :
                filter;
        });
        setFilterList(newFilterList);
    }

    const handleClearFilters = () => {
        setFilterList(filtersData);
    }

    return (
        <>
            <BookingForm
                filters={filterList}
                onFilter={handleGlobalFilters}
                onClearFilter={handleClearFilters}
            />
        </>
    );
}

export default Booking;