import '../assets/styles/BookingForm.css';
import { getFormattedToday, getCountryString, getPriceString, getDateString } from '../assets/data/utils';

const BookingForm = ({ filters, onFilter, onClearFilter }) => {

    const [countryFilter, priceFilter, sizeFilter, dateFromFilter, dateToFilter] = filters;
    const handleFilters = (e) => {
        onFilter(e.target.id, e.target.value);
    }
    const handleClearButton = (e) => {
        onClearFilter();
    }

    return (
        <>
            <header className="Header">
                <div className="Filter__Container">
                    <div className="Filter__Grid">
                        <select className="Filter__Countries Filter-Icon" onChange={handleFilters} name="filter-countries" id="filter-countries" value={countryFilter.value}>
                            <option value="all">Todos los países</option>
                            <option value="country1">Argentina</option>
                            <option value="country2">Brasil</option>
                            <option value="country3">Chile</option>
                            <option value="country4">Uruguay</option>
                        </select>

                        <label class="visually-hidden" for="date-from"></label>
                        <input className="Filter__DateFrom Filter-Icon" name="date-from" id="date-from" onChange={handleFilters} min={getFormattedToday()} max={dateToFilter.value} type="date" value={dateFromFilter.value} />
                        
                        <label class="visually-hidden" for="date-to"></label>
                        <input className="Filter__DateTo Filter-Icon" name="date-to" id="date-to" onChange={handleFilters} type="date" min={dateFromFilter.value > getFormattedToday() ? dateFromFilter.value : getFormattedToday()} value={dateToFilter.value} />

                        <select className="Filter__Prices Filter-Icon" onChange={handleFilters} name="filter-prices" id="filter-prices" value={priceFilter.value}>
                            <option value="all">Todas las categorías</option>
                            <option value="price1">Economic</option>
                            <option value="price2">Comfort</option>
                            <option value="price3">Premium</option>
                            <option value="price4">Deluxe</option>
                        </select>
                        <select className="Filter__Sizes Filter-Icon" onChange={handleFilters} name="filter-sizes" id="filter-sizes" value={sizeFilter.value}>
                            <option value="all">Indiferente</option>
                            <option value="size1">1 a 4 personas</option>
                            <option value="size2">4 a 9 personas</option>
                            <option value="size3">10 a más personas</option>
                        </select>

                        <button className="Filter__Clear" onClick={handleClearButton}>Borrar</button>
                    </div>
                </div>
                <div className="FoundMessage__Container">
                    <p className="FoundMessage__Title">Encontramos para vos...</p>
                    <p className="FoundMessage__Content">Campings de {getPriceString(priceFilter.value)} {getDateString(dateFromFilter.value, dateToFilter.value)} en {getCountryString(countryFilter.value)}.</p>
                </div>
            </header>
        </>

    );
}

export default BookingForm;
