import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );
            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam("");
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setSearchParam("");
        }
    };

    const handleAddToFavorite = (getCurrentItem) => {
        let cpyFavoritesList = [...favoritesList];
        const index = cpyFavoritesList.findIndex(
            (item) => item.id === getCurrentItem.id
        );

        if (index === -1) {
            cpyFavoritesList.push(getCurrentItem);
        } else {
            cpyFavoritesList.splice(index);
        }

        setFavoritesList(cpyFavoritesList);
    };
    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                loading,
                recipeList,
                setSearchParam,
                handleSubmit,
                recipeDetailsData,
                setRecipeDetailsData,
                handleAddToFavorite,
                favoritesList,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
