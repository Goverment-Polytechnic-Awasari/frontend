import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";

// Priyanka Ghode Routes.....

import Dashbord from "./pages/SubjectTeacherPages/PriyankaGhode/Dashbord";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/ST-Dashbord" component={Dashbord} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
