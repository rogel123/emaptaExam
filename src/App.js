import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Create from "./container/Create";
import Update from "./container/Update";
import Error from "./container/404";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/404">
          <Error />
        </Route>
        <Route path="/update/:id">
          <Update />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}
