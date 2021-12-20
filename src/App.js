import './App.css';
import {Route, Switch} from "react-router-dom";
import Overview from "./pages/overview/Overview";
import Subreddit from "./pages/subreddit/Subreddit";
import React from "react";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Overview />
        </Route>
        <Route path='/subreddit/:subredditName'>
          <Subreddit />
        </Route>
      </Switch>
    </>
  );
}

export default App;
