import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RoleBaseAuth from "./api/rolebaseAuth";
import Login from "./pages/Login";
import UserRoute from "./components/UserRoute";
import Home from "./pages/Home"
// import STDashbord from "./pages/SubjectTeacherPages/STDashbord";
// import CTDashbord from "./pages/ClassTeacherPages/CTDashbord";
// import HODdashbord from "./pages/HODPages/HODdashbord";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const HandleAuthRequestForRoleCheck = async (role,authUser) => {
      const res = await RoleBaseAuth.post("/role", role);
      console.log("Hello")
      console.log(res.data)
      console.log("this is from app");
      console.log(res.data[0].role);
      if(res.data[0].role!=null || res.data[0].role!==undefined){
        if(res.data[0].role!==undefined){
          console.log(res.data[0].role)
          const user = {
            authUser: authUser,
            role:res.data[0].role
          };
          dispatch(setUser(user));
        }
        
      }
    };
    
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const role = {
          uid: authUser.uid,
          email: authUser.email,
        };
         HandleAuthRequestForRoleCheck(role,authUser);
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <UserRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
