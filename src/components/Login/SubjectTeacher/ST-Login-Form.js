import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';    
import { loginInitiate } from '../../../redux/actions';
import "./ST-Login-Form.css"

function STLoginForm() {

    const [state, setState] = useState({
        email: '',
        password: '',
    });
    
    const { email, password } = state;

    const { currentUser } = useSelector(state => state.user);

    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            history.push('/st-dashbord');
        }
    },[currentUser, history]);

    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({...state, email: '', password: ''});
    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({...state, [name]: value});
    }

  return (
    <div className='box'>
        <form onSubmit={handelSubmit}>
        <label htmlFor="email">Email ID / Username</label>
        <input
          type="email"
          name="email"
          id="STemail"
          placeholder="Email ID / Username"
          onChange={handleChange}
          value={email}
          autoFocus
          required
          className='inputBox'
        />
        <label htmlFor="password">Password</label>
        <input 
         type="password" 
         name="password"
         id="STpassword"
         placeholder="Enter Password"
         value={password}
         onChange={handleChange}
         className='inputBox'
         required />
        <button type="submit" className="login-btnss">Login</button>
        </form> 
    </div>
  )
}

export default STLoginForm