import React from "react";
import "./Styles/Main.css";

const Main = ({ activeNote, onUpdateNote }) => {
    const onEditNote = (type, value) => {
        onUpdateNote({
            ...activeNote,
            [type]: value,
            modDate: Date.now(),
        });
    };

    if (!activeNote) {
        return (
            <React.Fragment>
                <div className="no-active-note">ノートが選択されていません</div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="app-main">
                <div className="app-main-note-edit">
                    <input
                        id="title"
                        type="text"
                        value={activeNote.title}
                        onChange={(e) => onEditNote("title", e.target.value)}
                    />
                    <textarea
                        id="content"
                        placeholder="ノート内容を記入"
                        value={activeNote.content}
                        onChange={(e) => onEditNote("content", e.target.value)}
                    ></textarea>
                </div>
                <div className="app-main-note-preview">
                    <h1 className="preview-title">{activeNote.title}</h1>
                    <div className="markdown-preview">{activeNote.content}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Main;
