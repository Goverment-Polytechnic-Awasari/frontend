import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import UserRoute from "./components/UserRoute";
import STDashbord from "./pages/SubjectTeacherPages/STDashbord";
import CTDashbord from "./pages/ClassTeacherPages/CTDashbord";
import HODdashbord from "./pages/HODPages/HODdashbord";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <UserRoute path="/st-dashbord" component={STDashbord} />
          <Route path="/ct-dashbord" component={CTDashbord} />
          <Route path="/hod-dashbord" component={HODdashbord} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
