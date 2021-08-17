import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/Forms/LoginForm';
//import Navigation from './components/Layout/Navigation';
import Home from './components/HomePage/Home';
import Header from './components/Layout/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
