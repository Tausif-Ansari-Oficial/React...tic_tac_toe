import React from 'react'

export default function Pbox({ printFunction, val }) {
    return (
        <div>
            <button className='btn' onClick={printFunction}>{val}</button>
        </div>
    )
}
