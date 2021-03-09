import './App.css';
import Calendar from "./pages/Calendar.js";
import  {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import NewEvent from "./pages/NewEvent";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/addevent'} component={NewEvent}/>
                    <Route exact path={process.env.PUBLIC_URL + '/calendar'} component={Calendar}/>
                    <Redirect  exact from={process.env.PUBLIC_URL +'/'} to={process.env.PUBLIC_URL + '/calendar'}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
