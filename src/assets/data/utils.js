//Functions used in Header Component

//Get formatted today to define minimum date in From Date input
export function getFormattedToday() {
    return formatDate(new Date());
}

//Format date used in getFormattedToday function
export function formatDate(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();


    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}

//Get country string for FoundMessage__Content text
export const getCountryString = (countryValue) => {
    switch (countryValue) {
        case "country1":
            return "Argentina";
        case "country2":
            return "Brasil";
        case "country3":
            return "Chile";
        case "country4":
            return "Uruguay";
        default:
            return "todos los países";
    }
}

//Get size string for FoundMessage__Content text
export const getSizeString = (sizeValue) => {

    switch (sizeValue) {
        case "size1":
            return "Small-sized";
        case "size2":
            return "Medium-sized";
        case "size3":
            return "Large-sized";
        case "all":
            return "All sizes";
        default:
            return "All sizes"
    }
}

//Get price string for FoundMessage__Content text
export const getPriceString = (priceValue) => {
    switch (priceValue) {
        case "price1":
            return "categoría economic";
        case "price2":
            return "categoría comfort";
        case "price3":
            return "categoría premium";
        case "price4":
            return "categoría deluxe";
        case "all":
            return "todas las categorías"
        default:
            return "todas las categorías"
    }
}

//Get date string for FoundMessage__Content text
export const getDateString = (dateFromValue, dateToValue) => {

    //Create and adjust dates to UTC Offset.
    let dateFrom = new Date(dateFromValue);
    dateFrom.setHours(dateFrom.getHours() + (dateFrom.getTimezoneOffset() / 60));
    let dateTo = new Date(dateToValue);
    dateTo.setHours(dateTo.getHours() + (dateTo.getTimezoneOffset() / 60));

    //Define arguments to send to Intl.DateTimeFormat according to expected string
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    if (dateFromValue !== "" && dateToValue !== "") {
        let dateFromString = new Intl.DateTimeFormat('es-AR', options).format(dateFrom);
        let dateToString = new Intl.DateTimeFormat('es-AR', options).format(new Date(dateTo));
        return `desde el ${dateFromString} hasta el ${dateToString}`;
    }
    return "";
}

//Fuctions used in campingCard Component

//Prevent scroll when campingCard is expanded in mobile version
export function preventScroll() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', scrollToTop);
}

//Restart scroll when campingCard is not expanded in mobile version
export function restartScroll() {
    window.removeEventListener('scroll', scrollToTop);
}

//Scroll to top used in preventScroll() and restartScroll() 
function scrollToTop() {
    window.scrollTo(0, 0);
}

//Functions used in Main Component

//Fade out the message to inform users can Hover over campingCards to obtain more information
export function fadeOutHoverInfoMsg() {
    let infoMsg = document.querySelector(".InfoMessage");
    setTimeout(() => {
        infoMsg.style.transition = "all 0.5s ease-out";
        infoMsg.style.height = 0;
        infoMsg.style.marginTop = "-0.2rem";
        infoMsg.style.opacity = 0;
        infoMsg.style.padding = 0;
    }, 4000);
}

//Functions used in App Component

//Filter campings in campingList according to the filters in filterList
export const filterCampings = (campingList, filterList) => {
    let filteredCampingList = [];
    let filteredCampingList2 = [];
    let filteredCampingList3 = [];
    let filteredCampingList4 = [];

    if (filterList[0].value === "all") {
        filteredCampingList = campingList;
    }
    else {
        filteredCampingList = campingList.filter(camping => camping.country === getCountryName(filterList[0].value));
    }

    if (filterList[1].value === "all") {
        filteredCampingList2 = filteredCampingList;
    }
    else {
        filteredCampingList2 = filteredCampingList.filter(camping => camping.priceNumber === getPriceNumber(filterList[1].value));
    }

    if (filterList[2].value === "all") {
        filteredCampingList3 = filteredCampingList2;
    }
    else {
        filteredCampingList3 = filteredCampingList2.filter(camping => checkSizeWithRooms(filterList[2].value, camping.rooms));
    }

    if (filterList[3].value === "" || filterList[4].value === "") {
        filteredCampingList4 = filteredCampingList3;
    }
    else {
        if (!verifyMinDate(filterList[3].value)) {
            alert("Error. The check-in date cannot be earlier than today");
            filterList[3].value = "";
            filterList[4].value = "";
            return filteredCampingList3;
        }

        if (verifyDateRange(getUnixDate(filterList[3].value), getUnixDate(filterList[4].value)) === "error") {
            alert("Error. The check-out date cannot be earlier than the check-in date.")
            filterList[3].value = "";
            filterList[4].value = "";
            return filteredCampingList3;
        }
        else if (!isNaN(getUnixDate(filterList[3].value)) && !isNaN(getUnixDate(filterList[4].value))) {
            filteredCampingList4 = filteredCampingList3.filter(camping =>
                checkAvailability(filterList[3].value, filterList[4].value, camping));
        }
    }

    return filteredCampingList4;
}

//Used in filterCampings() to obtain the selected country name
const getCountryName = (value) => {
    switch (value) {
        case "country1":
            return "Argentina";
        case "country2":
            return "Brasil";
        case "country3":
            return "Chile";
        case "country4":
            return "Uruguay";
        default:
            return "all";
    }
}

//Used in filterCampings() to obtain the selected price number
const getPriceNumber = (value) => {
    switch (value) {
        case "price1":
            return 1;
        case "price2":
            return 2;
        case "price3":
            return 3;
        case "price4":
            return 4;
        default:
            return "all";
    }
}

//Used in filtercampings() to categorize campings size according to the number of rooms
const checkSizeWithRooms = (size, rooms) => {


    switch (size) {
        case "size1":
            if (rooms <= 10) {
                return true;
            }
            else return false;
        case "size2":
            if (rooms > 10 && rooms <= 20) {
                return true;
            }
            else return false;
        case "size3":
            if (rooms > 20) {
                return true;
            }
            else return false;
        default:
            return false
    }

}

//Used in filtercampings() to validate fromDate is equal or later than today
function verifyMinDate(fromDate) {
    let today = new Date();
    let selectedDate = new Date(fromDate);

    return (sameDay(today, selectedDate) || selectedDate > today);
}

//Used in verifyMinDate() to validate if given day1 is the same than day2
function sameDay(day1, day2) {
    //We add these hours to adjust the Timezone Offset
    let hoursToAdd = day2.getTimezoneOffset() / 60;
    day2.setHours(day2.getHours() + hoursToAdd);

    return (
        day1.getFullYear() === day2.getFullYear() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getDate() === day2.getDate()
    );
}

//Used in filtercampings() to validate check-out date cannot be earlier than the check-in date.
function verifyDateRange(dateFrom, dateTo) {
    return dateFrom > dateTo ? "error" : "dates ok";
}

//Used in filtercampings() to get UNIX format of a given date
function getUnixDate(date) {
    return new Date(date).getTime();
}

//Used in filtercampings() to check availavility of a camping according the given dateFrom and dateTo
const checkAvailability = (dateFrom, dateTo, camping) => {
    /*We add hours in order to adjust the UTC offset between the dates selected 
    by the user (in filters) and the given campings' availability dates (in the database).*/
    let newSelectedFromDate = new Date(dateFrom);
    let newAvailabilityFrom = new Date(camping.availabilityFrom);
    let hoursToAddFrom = newAvailabilityFrom.getHours() + (newSelectedFromDate.getTimezoneOffset() / 60) + 1;
    newSelectedFromDate.setHours(newSelectedFromDate.getHours() + hoursToAddFrom);

    let newSelectedToDate = new Date(dateTo);
    let newAvailabilityTo = new Date(camping.availabilityTo);
    let hoursToAddTo = newAvailabilityTo.getHours() + (newSelectedToDate.getTimezoneOffset() / 60);
    newSelectedToDate.setHours(newSelectedToDate.getHours() + hoursToAddTo);

    if ((newSelectedFromDate.valueOf() >= newAvailabilityFrom.valueOf()) && (newSelectedToDate.valueOf() <= newAvailabilityTo.valueOf())) {
        return true;
    }
    else return false;
}
