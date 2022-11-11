import '../assets/styles/Search.css'

const SearchResults = ({campings}) => {

    
    return (
        <>
        <main className="Main">
            {campings}
        </main>
        </>
    );
}

export default SearchResults;