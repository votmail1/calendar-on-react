import {getTasksList} from "../connection/getTasksList";
import {Component} from "react";
import {setTasksList} from "../connection/setTasksList";
import {NavLink} from "react-router-dom";
import React from "react";

export default class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: (getTasksList()),
            participants: [
                'Mariya, Bob, Alex',
                'Steve, Bill, Elon',
                'John',
                'Angela'
            ],
            error: false,
            message: ''
        }
    }

    errorMessage = (newEvent, date) => {
        let alignment = this.state.data.find(elem => elem.date === date)
        this.setState(() => {
            if (newEvent.name === '') {
                return {
                    error: true,
                    message: 'Filed to create an event. Enter the name of the event.'
                }
            } else if (alignment) {
                return {
                    error: true,
                    message: 'Filed to create an event. Time slot is already booked.'
                }
            } else {
                const List = [...this.state.data];
                List.push(newEvent)
                setTasksList(List);

                return {
                    error: false,
                    message: '',
                    data: List
                }
            }
        });
    }

    newEvent = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let name = elements.eventName.value;
        let participants = elements.participants.value;
        let day = elements.day.value;
        let time = elements.time.value;
        let date = (day.substr(0, 3) + time.substr(0, 2)).toLowerCase();
        let newEvent = {
            'name': name,
            'participants': participants,
            'date': date
        };

        this.errorMessage(newEvent, date);
        return false;
    }

    render() {
        return (
            <div className='addEvent'>
                {this.state.error ? <div className='errorMessage'>
                    {this.state.message}
                    <div className="cl-btn-2" onClick={()=>this.setState({error:false})}>
                        <div>
                            <div className="leftright"/>
                            <div className="rightleft"/>
                        </div>
                    </div>
                </div> : ''}
                <form onSubmit={this.newEvent}>
                    <div className='containerName'>
                        Name of the event:
                        <textarea className='eventName' name='eventName'/>
                    </div>
                    <div className='participants'>Participants<select name='participants'>
                        {this.state.participants.map((elem, index) =>
                            <option key={index} value={elem}>{elem}</option>
                        )}
                    </select></div>
                    <div className='containerDay'>Day:<select name='day'>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </select></div>
                    <div className='containerTime'>Time:<select name='time'>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                        <option>18:00</option>
                    </select></div>
                    <div className='containerButtons'>
                        <div>
                            <NavLink to='/calendar'>
                                <button className='cancelButton'>
                                    Cancel
                                </button>
                            </NavLink>
                        </div>
                        <input type='submit' className='createlButton' value='Create'/>
                    </div>
                </form>
            </div>
        )
    }
}