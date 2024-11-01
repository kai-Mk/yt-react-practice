import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
    return (
        <div className="search-engin">
            <input
                type="text"
                className="city-search"
                placeholder="Enter City Name"
                name="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Search;
