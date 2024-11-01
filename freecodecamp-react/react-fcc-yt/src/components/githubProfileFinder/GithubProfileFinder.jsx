import React, { useEffect, useState } from "react";
import styles from "./github.module.css";
import Card from "./Card";

const GithubProfileFinder = () => {
    const [userName, setUserName] = useState("kai-MK");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchGithubUserData = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.github.com/users/${userName}`
            );
            const data = await response.json();
            setUserData(data);
            setUserName("");
        } catch (error) {
            console.error("Error fetching GitHub user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        fetchGithubUserData();
    };

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h2>Loading data ! Please wait</h2>;
    }

    return (
        <>
            <h1>Github Profile Finder</h1>
            <div className={styles.GithubProfileContainer}>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        name="search-by-username"
                        placeholder={"Search Github Username..."}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Search</button>
                </div>
                {userData !== null ? <Card user={userData} /> : null}
            </div>
        </>
    );
};

export default GithubProfileFinder;
