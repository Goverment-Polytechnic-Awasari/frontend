import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../redux/actions";

function Home() {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if(currentUser) {
      dispatch(loginInitiate());
    }
  };

  return (
    <div><h1>Home</h1>
    <button onClick={handleAuth} > Logout </button>
    </div>
  )
}

export default Home