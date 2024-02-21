import React, { useState } from 'react'

export default function Box({ val, onBoxClick }) {

    return (
        <div>
            <button className='btn' onClick={onBoxClick}>{val}</button>
        </div>
    )
}
