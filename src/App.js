import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import UserRoute from "./components/UserRoute";

// Subject Teacher Routes.....
import STDashbord from "./pages/SubjectTeacherPages/Dashbord";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <UserRoute exact path="/st-dashbord" component={STDashbord} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
