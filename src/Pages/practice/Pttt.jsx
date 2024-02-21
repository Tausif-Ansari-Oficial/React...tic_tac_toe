import React, { useState } from 'react'
import Pbox from './Pbox'

export default function Pttt() {

    const [box, setBox] = useState(Array(9).fill(null))
    const [isX, setIsx] = useState(true)

    const handleFunction = (i) => {
        if (winFunction(box) !== null || box[i] != null) {
            return
        }
        let newBox = box.slice()

        isX ? newBox[i] = 'X' : newBox[i] = 'O'
        setBox(newBox)
        setIsx(!isX)
    }

    const winner = winFunction(box)
    let staus;

    if (box.every((cell) => cell !== null)) {
        staus = "Draw "
    } else if (!winner) {
        staus = isX ? "X" : "O"
    } else if (winner) {
        staus = `winner is ${winner}`;
    }

    return (
        <div>
            {staus}
            <div className="d-flex">
                <Pbox val={box[0]} printFunction={() => handleFunction(0)} />
                <Pbox val={box[1]} printFunction={() => handleFunction(1)} />
                <Pbox val={box[2]} printFunction={() => handleFunction(2)} />
            </div>
            <div className="d-flex">
                <Pbox val={box[3]} printFunction={() => handleFunction(3)} />
                <Pbox val={box[4]} printFunction={() => handleFunction(4)} />
                <Pbox val={box[5]} printFunction={() => handleFunction(5)} />
            </div>
            <div className="d-flex">
                <Pbox val={box[6]} printFunction={() => handleFunction(6)} />
                <Pbox val={box[7]} printFunction={() => handleFunction(7)} />
                <Pbox val={box[8]} printFunction={() => handleFunction(8)} />
            </div>
        </div>
    )
}

const winFunction = (state) => {
    const winPatterns = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < winPatterns.length; i++) {
        // console.log(i);
        const [P, Q, R] = winPatterns[i]
        if (state[P] && state[P] === state[Q] && state[P] === state[R]) {
            return state[P]
        }
    }
    return null
}

