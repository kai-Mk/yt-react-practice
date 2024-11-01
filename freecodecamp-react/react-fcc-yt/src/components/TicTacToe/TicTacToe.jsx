import React, { useEffect, useState } from "react";
import styles from "./TicTacToe.module.css";

const Square = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className={styles.square}>
            {value}
        </button>
    );
};

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");

    const getWinner = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x];
            }
        }

        return null;
    };

    const handleClick = (getCurrentSquare) => {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    };

    const handleRestart = () => {
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
        setStatus("");
    };

    useEffect(() => {
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus("This is a draw ! Please restart the game");
        } else if (getWinner(squares)) {
            setStatus(
                `The winner is ${getWinner(squares)}! Please restart the game`
            );
        } else {
            setStatus(`Next Play is ${isXTurn ? "X" : "O"}`);
        }
    }, [squares, isXTurn]);

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <div className={styles.ticTacToeContainer}>
                <div className={styles.row}>
                    <Square onClick={() => handleClick(0)} value={squares[0]} />
                    <Square onClick={() => handleClick(1)} value={squares[1]} />
                    <Square onClick={() => handleClick(2)} value={squares[2]} />
                </div>
                <div className={styles.row}>
                    <Square onClick={() => handleClick(3)} value={squares[3]} />
                    <Square onClick={() => handleClick(4)} value={squares[4]} />
                    <Square onClick={() => handleClick(5)} value={squares[5]} />
                </div>
                <div className={styles.row}>
                    <Square onClick={() => handleClick(6)} value={squares[6]} />
                    <Square onClick={() => handleClick(7)} value={squares[7]} />
                    <Square onClick={() => handleClick(8)} value={squares[8]} />
                </div>
            </div>
            <h2>{status}</h2>
            <button onClick={handleRestart}>Restart</button>
        </>
    );
};

export default TicTacToe;
