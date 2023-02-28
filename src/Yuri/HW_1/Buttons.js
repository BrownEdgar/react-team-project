import React from 'react'
import './Buttons.css';

export default function Buttons(props) {
    return (
        <div className="buttons">
            <button className="armagedon btn" onClick={props.deleteAll}>Clear All</button>
            <button className="other btn" onClick={props.sortByAge}>Sort It</button>
            <button className='other btn' onClick={props.onlyOneStay}>Random It</button>
            <button className='other btn' onClick={props.addPerson}>Add</button>
        </div>
    )
}