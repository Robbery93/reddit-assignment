import './App.css';
import {Route, Switch} from "react-router-dom";
import Overview from "./pages/overview/Overview";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Overview />
        </Route>
        <Route>
          <Subreddit path='/subreddit'/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
