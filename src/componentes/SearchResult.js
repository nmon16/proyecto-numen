import '../assets/styles/Main/Main.scss'

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