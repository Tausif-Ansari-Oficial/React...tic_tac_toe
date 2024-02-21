import React, { useState } from 'react'
import Box from './Box'

export default function TTT() {
    const [box, setBox] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

    const handleFunction = (i) => {
        if (findWinner(box) || box[i] !== null) {
            {/* findWinner("X"/"O") */ }
            return;
        }
        const newBox = box.slice()
        if (isX) {
            newBox[i] = "X"
        } else {
            newBox[i] = "O"
        }
        setBox(newBox)
        setIsX(!isX)
    }

    const winner = findWinner(box);
    let status;

    if (winner) {
        status = "winner is " + winner;
    }

    else if (!winner) {
        status = isX ? "Next player: X" : "Next player: O";
    }

    else if (box.every((cell) => cell !== null)) {
        status = "Draw"
    }

    return (
        <div>{status}<br />
            <div className="d-flex">
                <Box val={box[0]} onBoxClick={() => handleFunction(0)} />
                <Box val={box[1]} onBoxClick={() => handleFunction(1)} />
                <Box val={box[2]} onBoxClick={() => handleFunction(2)} />
            </div>
            <div className="d-flex">
                <Box val={box[3]} onBoxClick={() => handleFunction(3)} />
                <Box val={box[4]} onBoxClick={() => handleFunction(4)} />
                <Box val={box[5]} onBoxClick={() => handleFunction(5)} />
            </div>
            <div className="d-flex">
                <Box val={box[6]} onBoxClick={() => handleFunction(6)} />
                <Box val={box[7]} onBoxClick={() => handleFunction(7)} />
                <Box val={box[8]} onBoxClick={() => handleFunction(8)} />
            </div>
        </div>
    )
}

const findWinner = (arg) => {
    const win = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
        const [P, Q, R] = win[i]
        if (arg[P] && arg[P] === arg[Q] && arg[P] === arg[R]) {
            return arg[P]
        }
    }
    return null
}