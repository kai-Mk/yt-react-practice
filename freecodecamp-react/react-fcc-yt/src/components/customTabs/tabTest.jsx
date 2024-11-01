import React from "react";
import Tabs from "./tabs";

const RandomComponent = () => {
    return <h1>Some random content</h1>;
};

const TabTest = () => {
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content for Tab 1</div>,
        },
        {
            label: "Tab 2",
            content: <div>This is content for Tab 2</div>,
        },
        {
            label: "Tab 3",
            content: <RandomComponent />,
        },
    ];

    const handleChange = (currentTabIndex) => {};

    return (
        <>
            <h1>Custom Tags</h1>
            <Tabs tabsContent={tabs} onChange={handleChange} />
        </>
    );
};

export default TabTest;
