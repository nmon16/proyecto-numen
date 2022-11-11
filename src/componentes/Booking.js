import { useState } from 'react';
import BookingForm from './BookingForm.js';
import SearchResults from './SearchResult';
import CampingList from './CampingList';
import { campingsData } from '../assets/data/data.js';
import { filterCampings } from '../assets/data/utils';
import { filtersData } from '../assets/data/data.js';

const Booking = () => {
    
    const [filterList, setFilterList] = useState(filtersData);
    const handleGlobalFilters = (filterId, filterValue) => {
        let newFilterList = filterList.map(filter => {
            return filterId === filter.id ? { id: filter.id, value: filterValue } : filter
        });
        setFilterList(newFilterList);
    }

    const handleClearFilters = () => { setFilterList(filtersData) }

    let filteredCampingList = filterCampings(campingsData, filterList);


    return (
        <>
            <div className='color2'>
                <BookingForm
                    filters={filterList}
                    onFilter={handleGlobalFilters}
                    onClearFilter={handleClearFilters}
                />
                <button className="collapseButton" data-bs-toggle="collapse" data-bs-target="#demo">Ver</button>
                <div id="demo" className="collapse" >
                    <SearchResults campings={<CampingList filteredCampings={filteredCampingList} />} />
                </div>
            </div>
        </>
    );
}

export default Booking;