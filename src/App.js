import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./components/home";

export default function App() {
  return(
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact={true} component={Home}/>
        </Switch>
      </BrowserRouter>
  )
}