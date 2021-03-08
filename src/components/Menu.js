import {NavLink} from "react-router-dom";
import {getTasksList} from "../connection/getTasksList";
import React from "react";

const Menu = (props) => {
    const data = getTasksList();
    let participants = '';
    data.map((a) => participants += ',' + a.participants);
    participants = participants.split(',').slice(1);
    const uniqueParticipants = participants.filter((item, index) => participants.indexOf(item) === index);

    const option = uniqueParticipants.map((a, i) =>
        <option key={i}>{a}</option>);
    return (
        <div className="manager">
            <div id="name">Calendar</div>
            <select className={'members'} onChange={(e) => props.participants(e.target)}>
                <option>{'All members'}</option>
                {option}
            </select>
            <div className='addevent'>
                <NavLink to='/addevent'>
                    <button className="css-button" id="eventButton">
                        Event +
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
export default Menu;