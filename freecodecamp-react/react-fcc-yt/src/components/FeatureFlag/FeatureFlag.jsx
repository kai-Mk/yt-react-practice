import React, { useContext } from "react";
import LightDarkMode from "../LightDarkMode/LightDarkmode";
import TicTacToe from "../TicTacToe/TicTacToe";
import RandomColor from "../randomColor/randomColor";
import Accordion from "../accordion";
import TreeView from "../treeView/TreeView";
import { FeatureFlagsContext } from "./context";
import menus from "../treeView/data";

const FeatureFlag = () => {
    const { loading, enableFlags } = useContext(FeatureFlagsContext);

    const componentToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />,
        },
        {
            key: "showTicTacToe",
            component: <TicTacToe />,
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />,
        },
        {
            key: "showAccordion",
            component: <Accordion />,
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus} />,
        },
    ];

    const checkEnableFlags = (getCurrentKey) => {
        return enableFlags[getCurrentKey];
    };

    if (loading) return <h1>Loading data! Please wait</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {componentToRender.map((componentItem) =>
                checkEnableFlags(componentItem.key)
                    ? componentItem.component
                    : null
            )}
        </div>
    );
};

export default FeatureFlag;
