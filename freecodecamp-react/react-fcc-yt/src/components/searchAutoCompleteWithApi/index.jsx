import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import Suggestion from "./Suggestion";

const SearchAutoCompleteWithApi = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleChangeValue = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filterData =
                users && users.length
                    ? users.filter(
                          (item) => item.toLowerCase().indexOf(query) > -1
                      )
                    : [];
            setFilteredUsers(filterData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleClick = (event) => {
        setShowDropdown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    };

    const fetchListOfUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    };

    useEffect(() => {
        fetchListOfUsers();
    }, []);
    return (
        <>
            <h1>Search Autocomplete with api</h1>
            <div className={styles.SearchAutoCompleteWithApi}>
                {loading ? (
                    <h1>Loading Data ! Please Wait</h1>
                ) : (
                    <input
                        name="search-users"
                        placeholder="Search Users here..."
                        value={searchParam}
                        onChange={(e) => handleChangeValue(e)}
                    />
                )}
                {showDropdown && (
                    <Suggestion
                        data={filteredUsers}
                        handleClick={handleClick}
                    />
                )}
            </div>
        </>
    );
};

export default SearchAutoCompleteWithApi;
