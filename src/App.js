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
                        <Route path='/addevent' component={NewEvent}/>
                        <Route path='/calendar' component={Calendar}/>
                        <Route path='' component={Calendar}/>
                    </Switch>
                </div>
        </BrowserRouter>
    )
}

export default App;
