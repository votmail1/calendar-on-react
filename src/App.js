import './App.css';
import Calendar from "./pages/Calendar.js";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import NewEvent from "./pages/NewEvent";
import React from "react";

function App() {
    return (
        <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='https://votmail1.github.io/calendar-on-react/addevent' component={NewEvent}/>
                        <Route exact path='https://votmail1.github.io/calendar-on-react/calendar' component={Calendar}/>
                        <Route exact path='https://votmail1.github.io/calendar-on-react/' component={Calendar}/>
                    </Switch>
                </div>
        </BrowserRouter>
    )
}

export default App;
