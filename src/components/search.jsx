import '../App.css';
function Search({ searchQuery, onSearchChange }) {
    return (
        <div className="container-fluid search-section">
            <form className="d-flex m-3 mt-5" role="search">
                <input className="form-control me-2" type="search" placeholder="Search posts..." aria-label="Search" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
                <button className="btn btn-primary" type="button" onClick={() => console.log(searchQuery)}>Search</button>
            </form>
        </div>
    )
}

export default Search;