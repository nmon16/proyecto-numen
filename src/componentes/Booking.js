//Dependencies
import React, { useState } from 'react';
//Data
import { filtersData } from '../assets/data/data.js';
import BookingForm from './BookingForm.js';
import SearchResults from './SearchResult';
import CampingList from './CampingList';
import { hotelsData } from '../assets/data/data.js';
import { filterHotels } from '../assets/data/utils';

const Booking = () => {

    //State
    const [filterList, setFilterList] = useState(filtersData);

    //Handlers
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
    let filteredHotelList = filterHotels(hotelsData, filterList);


    return (
        <>
            <div style={{backgroundColor: "#B85B14"}}>
                <BookingForm
                    filters={filterList}
                    onFilter={handleGlobalFilters}
                    onClearFilter={handleClearFilters}
                />
                <button className="Filter__Clear" style={{margin:"0px 0px 20px 100px"}} data-bs-toggle="collapse" data-bs-target="#demo">Ver</button>
                <div id="demo" className="collapse" style={{backgroundColor: "#B85B14", color: "black", padding: "10px", marginTop: "10px" }}>
                    <SearchResults hotels={<CampingList filteredHotels={filteredHotelList} />} />
                </div>
            </div>
        </>
    );
}

export default Booking;