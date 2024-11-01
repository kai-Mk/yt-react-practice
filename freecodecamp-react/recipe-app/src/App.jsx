import { useState } from "react";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import Favorite from "./pages/favorites/Favorite";
import Details from "./pages/details/Details";

function App() {
    return (
        <>
            <div>
                <div className="w-full min-h-screen p-6 bg-white text-grey-600 text-lg">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorites" element={<Favorite />} />
                        <Route path="/recipe_item/:id" element={<Details />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
