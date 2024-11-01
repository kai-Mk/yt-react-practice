import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/randomColor/randomColor";
import StarRating from "./components/starRating/StarRating";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreData from "./components/loadMoreData/loadMoreData";
import TreeView from "./components/treeView/TreeView";
import menus from "./components/treeView/data";
import QRCodeGenerator from "./components/QRCoadGenerator/QRCodeGenerator";
import LightDarkMode from "./components/LightDarkMode/LightDarkmode";
import ScrollIndicator from "./components/scrollIndicator";
import TabTest from "./components/customTabs/tabTest";
import ModalTest from "./components/customModalPopup/modalTest";
import GithubProfileFinder from "./components/githubProfileFinder/GithubProfileFinder";
import SearchAutoCompleteWithApi from "./components/searchAutoCompleteWithApi";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import FeatureFlagGlobalState from "./components/FeatureFlag/context";
import FeatureFlag from "./components/FeatureFlag/FeatureFlag";
import UseFetchHookTest from "./components/UseFetch/test";
import UseOnClickOutsideTest from "./components/UseOutsideClick/test";
import UseWindowResizeTest from "./components/UseWindowResize/test";
import ScrollToTopAndBottom from "./components/ScrollToTopAndBottom";
import ScrollToSection from "./components/ScrollToTopAndBottom/ScrollToSection";

function App() {
    return (
        <>
            {/* <Accordion /> */}

            {/* RandomColor Component */}
            {/* <RandomColor /> */}

            {/* StarRating Component */}
            {/* <StarRating /> */}

            {/* ImageSlider Component */}
            {/* <ImageSlider
                url={"https://picsum.photos/v2/list"}
                limit={"10"}
                page={"1"}
            /> */}

            {/* LoadMoreData Component */}
            {/* <LoadMoreData /> */}

            {/* Tree view component / menu UI component / recursive navigation menu */}
            {/* <TreeView menus={menus} /> */}

            {/* QRCode Generator Component */}
            {/* <QRCodeGenerator /> */}

            {/* LightDarkMode Component */}
            {/* <LightDarkMode /> */}

            {/* scroll indicator */}
            {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

            {/* Custom tabs  */}
            {/* <TabTest /> */}

            {/* Custom modal popup */}
            {/* <ModalTest /> */}

            {/* github profile finder */}
            {/* <GithubProfileFinder /> */}

            {/* search autocomplete with api */}
            {/* <SearchAutoCompleteWithApi /> */}

            {/* Tic Tac Toe component */}
            {/* <TicTacToe /> */}

            {/* Feature Flag Implementation */}
            {/* <FeatureFlagGlobalState>
                <FeatureFlag />
            </FeatureFlagGlobalState> */}

            {/* useFetch - Custom Hook */}
            {/* <UseFetchHookTest /> */}

            {/* use Onclick Outside Hook Test */}
            {/* <UseOnClickOutsideTest /> */}

            {/* Use Window Resize Hook Test */}
            {/* <UseWindowResizeTest /> */}

            {/* Scroll To Top And Bottom */}
            {/* <ScrollToTopAndBottom /> */}

            {/* Scroll To Particular Section */}
            <ScrollToSection />
        </>
    );
}

export default App;
