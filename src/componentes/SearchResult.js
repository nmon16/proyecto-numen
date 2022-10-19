import '../assets/styles/Main/Main.scss'

const SearchResults = ({hotels}) => {

    
    return (
        <>
        <main className="Main">
            {hotels}
        </main>
        </>
    );
}

export default SearchResults;