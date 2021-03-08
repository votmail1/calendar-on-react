import TableCell from "./TableCell";
import React from "react";

const Rows = (props) => {

    return (
        <div className="d-tr">
            <div className="d-td time">{props.i}</div>
            <TableCell i = {props.i} d={'mon'}
                       participants = {props.participants}
                       warning = {props.warning}
                       data ={props.data}/>
            <TableCell i = {props.i} d={'tue'}
                       participants = {props.participants}
                       warning = {props.warning}
                       data ={props.data}/>
            <TableCell i = {props.i} d={'wed'}
                       participants = {props.participants}
                       warning = {props.warning}
                       data ={props.data}/>
            <TableCell i = {props.i} d={'thu'}
                       participants = {props.participants}
                       warning = {props.warning}
                       data ={props.data}/>
            <TableCell i = {props.i} d={'fri'}
                       participants = {props.participants}
                       warning = {props.warning}
                       data ={props.data}/>
        </div>
    )
}
export default Rows;