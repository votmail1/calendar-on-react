import Rows from "./Rows";
import {getTasksList} from "../connection/getTasksList";
import {Component} from "react";
import {setTasksList} from "../connection/setTasksList";
import React from "react";

class CalendarTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : getTasksList() || [{
                "participants": "",
                "name": "",
                "date": ""
            }],
            warning: false
        }
    }

    warning = (name, date) => {
        if (this.state.warning === false) {
            this.setState(({warning: true, date: date, name: name}))
        }
    }

    delTask = (date) => {
        const DB = [...getTasksList()];
        const arr = DB.filter(elem => elem.date !== date);
        setTasksList(arr);
        this.setState(({data}) => {
            const newArr = data.filter(elem => elem.date !== date);
            return {
                data: newArr,
                warning: false,
                canClose: true
            }
        });
    }
    date = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',];
    today = new Date();
    dd = String(this.today.getDate()).padStart(2, '0');
    mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = this.today.getFullYear();

    today = this.dd + '/' + this.mm + '/' + this.yyyy;
    render() {
        return (
            <>
                <div className="d-table">
                    <div className="d-tr">
                        <div className="d-td">{'today is: '+ this.today}</div>
                        <div className="d-td days">Mon</div>
                        <div className="d-td days">Tue</div>
                        <div className="d-td days">Wed</div>
                        <div className="d-td days">Thu</div>
                        <div className="d-td days">Fri</div>
                    </div>
                    {this.date.map((a, i) =>
                        <Rows id={i} i={a} key={i}
                              participants={this.props.participants}
                              warning={this.warning}
                              data={this.state.data}/>)}
                </div>
                {(this.state.warning === true) ? (
                        <div className='modal'>
                            <div className='modalWindow'>
                                <div className='confirmMessage'>
                                    "Are you sure, you want to delete {this.state.name}"
                                </div>
                                <div className='noButton'>
                                    <button className='no' onClick={() =>
                                        this.setState({warning: false, canClose: true})}>
                                        No
                                    </button>
                                </div>
                                <div className='yesButton'>
                                    <button className='yes' onClick={() =>
                                        this.delTask(this.state.date)}>
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>)
                    : ''}
            </>
        )
    }
}

export default CalendarTable;