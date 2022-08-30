import * as types from "./actionTypes";
import { auth } from "../firebase";
import RoleBaseAuth from '../api/rolebaseAuth'

//login
const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
//logout
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const loginInitiate = (email, password) => {
  return function(dispatch){
    dispatch(loginStart());
    var userA=null ;
    auth.signInWithEmailAndPassword(email,password).then(({user})=>{
        const role = {
            uid: user.uid,
            email: user.email,
          };
          userA = user;
        const promis = RoleBaseAuth.post("/role", role);
        return promis;
        
    }).then((res,error)=>{
        
            const New = {
                authUser:userA,
                role:res.role
            }
            dispatch(loginSuccess(New));
      
}).catch((error)=>dispatch(loginFail(error.message)));
}
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((res) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};
