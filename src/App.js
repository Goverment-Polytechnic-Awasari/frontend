import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import UserRoute from "./components/UserRoute";

// Priyanka Ghode Routes.....

import Dashbord from "./pages/SubjectTeacherPages/PriyankaGhode/Dashbord";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/ST-Dashbord" component={Dashbord} />
          <UserRoute path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
