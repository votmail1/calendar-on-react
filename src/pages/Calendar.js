import Menu from "../components/Menu";
import CalendarTable from "../components/CalendarTable";
import {Component} from "react";
import React from "react";

class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            participants: 'All members'
        }
    }
    participants = (el) => {
        this.newParticipants = el.value;
        this.setState({
            participants: el.value
        })
    }

    render(){
    return (
        <div>
            <Menu participants={this.participants}/>
            <CalendarTable participants = {this.state.participants}/>
        </div>
    )}
}
export default Calendar;