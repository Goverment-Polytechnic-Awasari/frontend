import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
