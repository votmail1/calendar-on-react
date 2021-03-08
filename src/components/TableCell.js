import {Component} from "react";
import React from "react";

export default class TableCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            participants: props.participants,
            warning: false,
            name: '',
            canClose: true
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.participants !== prevProps.participants) {
            this.setState({participants: this.props.participants});
        }
        else if (this.props.data !== prevProps.data) {
            this.setState({data: this.props.data});
        }
    }

    date = this.props.d + this.props.i[0] + this.props.i[1];

    render() {
        return (
            <div className="d-td" id={this.props.participants}>
                {this.state.data.map((item) => {
                    if (item.date === this.date && item.participants.match(this.state.participants)) {
                        return (
                            <div className='taskWrap' key={item.date}>
                                <div className='event' id={this.date} key={item.date}>
                                    {item.name}
                                </div>
                                <div className="cl-btn-7"  onClick={() => this.props.warning(item.name, item.date)}>
                                </div>
                            </div>
                        )
                    } else if (this.state.participants === 'All members' && (item.date === this.date)) {
                        return (
                            <div className='taskWrap' key={item.date}>
                                <div className='event' id={this.date} key={item.date}>
                                    {item.name}
                                </div>
                                <div className="cl-btn-7"  onClick={() => this.props.warning(item.name, item.date)}>

                                </div>
                            </div>
                        )
                    } else return ''
                })}
            </div>
        )
    }
}