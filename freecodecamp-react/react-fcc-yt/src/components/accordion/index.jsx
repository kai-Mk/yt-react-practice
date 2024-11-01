import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    const handleMultipleSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    };

    return (
        <>
            <div className="wrapper">
                <h1>React Accordion</h1>
                <button
                    onClick={() =>
                        setEnableMultiSelection(!enableMultiSelection)
                    }
                    className={
                        enableMultiSelection
                            ? "multiple-btn multiple-active"
                            : "multiple-btn"
                    }
                >
                    Enable Multi Selection
                </button>
                <div className="accordion">
                    {data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item" key={dataItem.id}>
                                <div
                                    onClick={
                                        enableMultiSelection
                                            ? () =>
                                                  handleMultipleSelection(
                                                      dataItem.id
                                                  )
                                            : () =>
                                                  handleSingleSelection(
                                                      dataItem.id
                                                  )
                                    }
                                    className="title"
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {enableMultiSelection
                                    ? multiple.indexOf(dataItem.id) !== -1 && (
                                          <div className="content">
                                              {dataItem.answer}
                                          </div>
                                      )
                                    : selected === dataItem.id && (
                                          <div className="content">
                                              {dataItem.answer}
                                          </div>
                                      )}
                            </div>
                        ))
                    ) : (
                        <div>No data found !</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Accordion;
