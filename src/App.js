import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import { Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import history from './history';



function App() {
  return (
    <div>
      <Header/>
      <Router history={history}>
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="" exact component={Login} />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
