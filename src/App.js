import './App.css';
import Register from './components/Register/Register';
import LoginWithGoogle from './components/LoginWIthGoogle/LoginWithGoogle';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <LoginWithGoogle />
            </Route>
            <Route path="/login">
              <LoginWithGoogle />
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping/>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
